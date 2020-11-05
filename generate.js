let axios = require('axios').default
axios.get('https://genshin-impact.fandom.com/wiki/Boreal_Wolf%27s_Milk_Tooth').then(resp=>{
    let dom = new DOMParser().parseFromString(resp.data)
    console.log(dom.getElementsByClass('wikitable'))
})
