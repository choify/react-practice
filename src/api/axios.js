import axios from 'axios'


const baseUrl = "https://kobis.or.kr/kobisopenapi/webservice/rest";
const key = "781fff11c74308a4e71979891847aa35";

const dailyBoxOffice = `${baseUrl}/boxoffice/searchDailyBoxOfficeList.json`;
const searchMoiveList = `${baseUrl}/movie/searchMovieList.json`

const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
const year = yesterday.getFullYear();
const month = ('0' + (yesterday.getMonth() + 1)).slice(-2);
const day = ('0' + yesterday.getDate()).slice(-2);
const date = year + month + day

export const getDailyMoives = async () => {
    const response = await axios.get(`${dailyBoxOffice}?key=${key}&targetDt=${date}`);
    return response;
};

export const getSearchMoiveList = async (pageParam = 1, year = 2022, options = {}) => {
    const response = await axios.get(`${searchMoiveList}?key=${key}&curPage=${pageParam}&itemPerPage=100&openStartDt=${year}`, options);
    return response;
};