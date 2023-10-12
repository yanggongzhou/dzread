import { AnyObject } from "@/typings/hive.interfaces";

export const ownFetch = async (url: string, params?: AnyObject, data?: AnyObject) => {
  try {
    const _params = params ? {pline: 3, ...params} : { pline: 3 };
    const keys = Object.keys(_params);
    const queryStr = keys.reduce((prev, curr, index) => {
      const str = prev + `${curr}=${_params[curr]}`;
      return keys.length === index + 1 ? str : str + '&';
    }, '?');

    const input = process.env.BaseUrl + "/asg/portal/website" + url + encodeURI(queryStr);

    const response = await fetch(input, {
      method: "GET",
      headers: new Headers({
        'Content-Type': "application/json",
      }),
      keepalive: false,
      body: data ? JSON.stringify(data) : null,
    });

    if (response.status === 200 && response.ok) {
      const res = await response.json();
      if (res.status === 0) {
        return res.data;
      }
      console.warn(`\n >>> Response Error ${response.status}-${res.status} <<< \n` +
        `Request Url: ${response.url} \n` +
        `Request Data: ${JSON.stringify(data)} \n` +
        `Response Data: ${JSON.stringify(res)} \n`
      );
      return 'BadRequest_404'
    }
    console.warn(`\n >>> Response Error ${response.status} <<< \n` +
      `Request Url: ${response.url} \n` +
      `Request Data: ${JSON.stringify(data)} \n`);

    return 'BadRequest_404'
  } catch (e) {
    console.error(`\n >>> Request failed <<< \n` +
      `ERROR: ${JSON.stringify(e)}`);
    return 'BadRequest_500'
  }
}

export const poFetch = async (url: string, data?: AnyObject, params?: AnyObject) => {
  try {
    // 192.168.11.251:9099/seo/fastapp/5000
    let queryStr = '';
    let input = 'http://localhost:3000' + url;
    // let input = 'http://192.168.11.251:9099/seo/fastapp' + url.replace('/api', '');
    if (params) {
      const _params = params ? {...params} : {};
      const keys = Object.keys(_params);
      queryStr = keys.reduce((prev, curr, index) => {
        const str = prev + `${curr}=${_params[curr]}`;
        return keys.length === index + 1 ? str : str + '&';
      }, '?');
      input += encodeURI(queryStr);
    }

    const response = await fetch(input, {
      method: "POST",
      headers: new Headers({
        'Content-Type': "application/json",
      }),
      keepalive: false,
      body: data ? JSON.stringify(data) : null,
    });

    if (response.status === 200 && response.ok) {
      const res = await response.json();
      if (res.retCode === 0) {
        return res.data;
      }
      console.warn(`\n >>> Response Error ${response.status}-${res.status} <<< \n` +
        `Request Url: ${response.url} \n` +
        `Request Data: ${JSON.stringify(data)} \n` +
        `Response Data: ${JSON.stringify(res)} \n`
      );
      return 'BadRequest_404'
    }
    console.warn(`\n >>> Response Error ${response.status} <<< \n` +
      `Request Url: ${response.url} \n` +
      `Request Data: ${JSON.stringify(data)} \n`);

    return 'BadRequest_404'
  } catch (e) {
    console.error(`\n >>> Request failed <<< \n` +
      `ERROR: ${JSON.stringify(e)}`);
    return 'BadRequest_500'
  }
}
