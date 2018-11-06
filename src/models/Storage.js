let Storage = {
    set(key,val){
        let curTime = new Date().getTime();
        localStorage.setItem(key,JSON.stringify({data:val,time:curTime}));
    },
    get(key,exp=7200000){
        let data = localStorage.getItem(key);
        let dataObj = JSON.parse(data);
        if(!dataObj){
            return null;
        }
        if(new Date().getTime() - dataObj.time>exp){
            console.log(`${key}:${dataObj.data}信息已过期`);
            this.remove(key);
            return null;
        }

        return dataObj.data;
    },
    remove(key){
        localStorage.removeItem(key);
    }
}

export default Storage;