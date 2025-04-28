function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dogwalked = false;
            if (dogwalked) {
                resolve("You walk the dog");
            }
            else{
                reject("You didn't walk the dog");
            }
        },1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        },2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You took out the trash");
            }
            else{
                reject("You didn't take out the trash");
            }
        },500);
    });
}
walkDog().then(value=>{console.log(value); return cleanKitchen()})
         .then(value=>{console.log(value); return takeOutTrash()})
         .then(value=>{console.log(value); console.log("You finished all the chores")})
         .catch(error=>console.log(error));