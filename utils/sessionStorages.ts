
// wap 书籍详情目录缓存
const bookKey = "Dz_book_catalog"
export const getSessionBook = () => {
  const strInd = window.sessionStorage.getItem(bookKey);
  if (strInd) {
    return Number(strInd) || 0
  }
  return 0;
};
export const setSessionBook = (str: string) => window.sessionStorage.setItem(bookKey, str);
export const removeSessionBook = () => window.sessionStorage.removeItem(bookKey);
