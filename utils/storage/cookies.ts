import Cookies from 'js-cookie';

// readSetting
const readSettingKey = "Dz_read_setting"
export const getReadSetting = () => Cookies.get(readSettingKey);
export const setReadSetting = (str: string) => Cookies.set(readSettingKey, str);
export const removeReadSetting = () => Cookies.remove(readSettingKey);
