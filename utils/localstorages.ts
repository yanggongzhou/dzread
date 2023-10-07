// readSetting
const bookInfoKey = "Dz_book_info";

interface ILocalBookInfo {
  bid: string;
  cid: string;
}

export const getBookInfo = () => {
  try {
    const listStr = window.localStorage.getItem(bookInfoKey);
    if (listStr) {
      const list = JSON.parse(listStr);
      return Array.isArray(list) ? list : [];
    }
  } catch (e) {}
  return [];
};

export const setBookInfo = (obj: ILocalBookInfo) => {
  const list = getBookInfo();
  const bookIndex = list.findIndex(val => val.bid === obj.bid);
  if (bookIndex === -1) {
    list.unshift(obj);
  } else {
    list.splice(bookIndex, 1, obj);
  }
  window.localStorage.setItem(bookInfoKey, JSON.stringify(list))
};
