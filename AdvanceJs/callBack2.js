function getData(dataId,getnextData){
    setTimeout(()=>{
        console.log("data",dataId)
        if(getnextData){
            getnextData();
        }
    },2000)
}


// this is callback hell bcz of nested callback (pyramide doom)
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    }); 
});
//without arrow function we can't pass function bcz it will execute immediately but here we need 2sec delay for that we used arrow function so it wll be considered as normal function and not get execute immediately.