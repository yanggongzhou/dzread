import React, { useMemo } from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netRanking } from "@/server/home";
import { ownOs } from "@/utils/tools";
import Breadcrumb from "@/components/common/breadcrumb";
import PcRanking from "@/components/pcRanking";
import WapRanking from "@/components/ranking";
import { IRankBookDataVo, IRankDataVo } from "@/typings/ranking.interface";
import { ERankSex } from "@/typings/home.interface";

interface IProps {
  isPc: boolean;
  page: number;
  pages: number; // 总页
  rankStyle: number;
  rankType: ERankSex;
  rankData: IRankDataVo[]; // 排行榜名称列表
  rankBook: IRankBookDataVo[]; // 某个排行榜对应的书籍信息data
  rankId?: number;
}

const RankingPage: NextPage<IProps> = (
  { isPc, rankData, rankBook, page, pages, rankStyle, rankType, rankId }) => {

  const wapRankData = useMemo(() => {
    const data = rankData.find(val => val.rankType === rankType);
    if (data) {
      return data.subList;
    }
    return [];
  }, [rankData]);
  return <>
    {isPc ?
      <PcRanking
        page={page}
        rankData={rankData}
        rankBook={rankBook}
        pages={pages}
        rankStyle={rankStyle}
        rankType={rankType}
        rankId={rankId}
      /> :
      <WapRanking
        page={page}
        subList={wapRankData}
        rankBook={rankBook}
        pages={pages}
        rankStyle={rankStyle}
        rankType={rankType}
        rankId={rankId}
      />}
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1', types } = query as { page?: string, types?: string };
  let rankType = ERankSex.Male;
  let rankStyle = undefined;
  let _rankId = undefined;
  if (types) {
    const typeArr = types.split('-');
    if (typeArr[0] && Number(typeArr[0]) && [ERankSex.Female, ERankSex.Male].includes(Number(typeArr[0]))) {
      rankType = Number(typeArr[0]) as ERankSex;
    }
    if (typeArr[1] && !isNaN(Number(typeArr[1]))) {
      _rankId = Number(typeArr[1])
    }
    if (typeArr[2] && Number(typeArr[2])) {
      rankStyle = Number(typeArr[2]);
    }
  }
  const _page = Number(page) || 1;
  const size = 10;
  console.log({
    index: _page,
    size,
    style: rankStyle,
    rankId: _rankId,
  })
  const response = await netRanking({
    index: _page,
    size,
    style: rankStyle,
    rankId: _rankId,
  });

  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }

  const { rankData = [] as IRankDataVo[], rankBook = [], totalSize = 0 } = response;
  if (_rankId === undefined) {
    if (rankData.length > 0 && rankData[0].subList && rankData[0].subList.length > 0 && rankData[0].subList[0].id) {
      _rankId = rankData[0].subList[0].id;
      rankStyle = rankData[0].subList[0].styleList[0].style;
    }
  }
  if (rankStyle === undefined) {
    rankData.forEach(val => {
      const obj = val.subList.find(sub => sub.id === _rankId);
      if (obj) {
        rankStyle = obj.styleList[0].style;
      }
    })
  }

  return {
    props: {
      rankData,
      rankBook,
      page: _page,
      pages: Math.ceil(totalSize / size) || 0,
      rankId: _rankId,
      rankType,
      rankStyle,
      isPc: ownOs(ua).isPc,
    }
  }
}

export default RankingPage;
