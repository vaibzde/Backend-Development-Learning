
> for(i = 0; i< 1000000; ++i){
    var user = {
        userId : i,
        username : "user" +"_" + i,
        age : Math.floor(Math.random()*100),
        createdAt : new Date(),
        modifiedAt : new Date(),
        countOfFriends : Math.floor(Math.random()*500),
        numberOfPosts : Math.floor(Math.random()*2000)
    }
}
