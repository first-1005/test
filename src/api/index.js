import {get} from '../utils/request';
const api={
    // 推荐歌单
    getRecommend(){
        return get('/api/recommend/resource')
    },
    // 推荐歌曲
    getRecommendMusic(){
      return get('/api//personalized/newsong')
    },

    // 歌单歌曲详情
    getMusic(params){
        return get('/api/playlist/detail',params)
    },

    // 登录
    login(params){
       return get('/api/login/cellphone',params)
    },

    // 播放接口
    getPlayer(params){
        return get('/api/song/url',params)
    },

    // Tabs数据
    getTabsData(params){
        return get('/api/dj/recommend/type',params)
    },

    // 获取歌词
    getLRCData(params){
        return get('/api/lyric',params)
    },

    // 搜索接口
     getSearch(params){
       return get('/api/search',params)
     }

}
export default api