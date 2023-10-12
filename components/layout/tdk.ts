import { IBookSearchVo } from "@/typings/browse.interface";

export const TDK = {
  index: {
    title: '点众免费小说在线阅读-小说全集免费阅读-点众阅读官网',
    keywords: '小说免费阅读,小说在线阅读,小说全集,点众阅读,点众阅读官网',
    description: '点众阅读,最新热门免费小说网站。提供都市小说、玄幻小说、武侠小说、青春小说、原创小说、网游小说、言情小说、科幻小说等首发小说,最新章节免费在线阅读。更多精彩内容尽在点众阅读小说网'
  },
  book: ({ book = {} as IBookSearchVo }: { book: IBookSearchVo}) => {
    const { bookName = '', introduction = '', author = '' } = book
    return {
      title: `${bookName}小说免费阅读--${bookName}小说完整版全文在线阅读-点众阅读`,
      keywords: `${bookName},${bookName}小说,${bookName}小说全文,${bookName}最新章节,${bookName}免费在线阅读`,
      description: `由${author}创作的${'分类'}小说${bookName}免费在线阅读，${introduction.slice(0, 200)}...`
    }
  },
  chapter: () => {

    return {
      title: '[章节名称]-[小说名称]最新章节-[小说名称]免费在线阅读-点众阅读',
      keywords: '[小说名称][章节名称],[小说名称]最新章节,[小说名称]免费在线阅读',
      description: '[小说名称][章节名称]+小说章节内容200个字符'
    }
  },

  browse: ({ typeTwoName = '', page = '1' }) => {
    if (page === '1') {
      return {
        title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-DramaBox`,
        keywords: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜`,
        description: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜,DramaBox提供热门${typeTwoName}短剧，欢迎在线观看`
      }
    }
    return {
      title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-第${page}页-DramaBox`,
      keywords: `${typeTwoName}短剧`,
      description: `${typeTwoName}短剧`
    }
  },
  ranking: ({ positionName = '', page = '1'}) => {
    if (page === '1') {
      return {
        title: `${positionName}短剧-${positionName}短剧排行榜-DramaBox`,
        keywords: `DramaBox${positionName}短剧,${positionName}短剧排行榜`,
        description: `DramaBox${positionName}短剧,${positionName}短剧排行榜,DramaBox提供热门${positionName}短剧，欢迎在线观看`
      }
    }
    return {
      title: `${positionName}短剧-${positionName}短剧排行榜-第${page}页-DramaBox`,
      keywords: `${positionName}全部短剧`,
      description: `${positionName}全部短剧`
    }
  },
  tag: ({ typeTwoName = '', page = '1' }) => {
    if (page === '1') {
      return {
        title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-DramaBox`,
        keywords: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜`,
        description: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜,DramaBox提供热门${typeTwoName}短剧，欢迎在线观看`
      }
    }
    return {
      title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-第${page}页-DramaBox`,
      keywords: `${typeTwoName}短剧`,
      description: `${typeTwoName}短剧`
    }
  },
  keywords: ({ typeTwoName = '', page = '1' }) => {
    if (page === '1') {
      return {
        title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-DramaBox`,
        keywords: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜`,
        description: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜,DramaBox提供热门${typeTwoName}短剧，欢迎在线观看`
      }
    }
    return {
      title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-第${page}页-DramaBox`,
      keywords: `${typeTwoName}短剧`,
      description: `${typeTwoName}短剧`
    }
  },
  recommend: ({ typeTwoName = '', page = '1' }) => {
    if (page === '1') {
      return {
        title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-DramaBox`,
        keywords: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜`,
        description: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜,DramaBox提供热门${typeTwoName}短剧，欢迎在线观看`
      }
    }
    return {
      title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-第${page}页-DramaBox`,
      keywords: `${typeTwoName}短剧`,
      description: `${typeTwoName}短剧`
    }
  },

  download: {
    title: '点众阅读下载-点众阅读',
    keywords: '点众阅读下载',
    description: '点众阅读下载'
  },
  error404: {
    title: '404-点众阅读',
    keywords: '',
    description: ''
  },
  error500: {
    title: '500-点众阅读',
    keywords: '',
    description: '',
  }
}
