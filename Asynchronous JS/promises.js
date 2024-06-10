let stocks = {
    Fruits : ["strawberry", "grapes","banana","apple"],
    liquids :["water","ice"],
    holder : ["cone","cup","stick"],
    topping : ["chocolate","peanuts"],

};


let is_shop_open = true;

let order = (time,work) =>{

    return new Promise((resolve,reject)=>{
     if (is_shop_open){

        setTimeout(()=>{
            resolve( work() )
        },time)
        
     }

     else{
        reject(console.log("our shop is closed"));
     }
    })
}


order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{

return order(1000, ()=>console.log("Production has started"))
})

.then(()=>{

    return order(2000,()=>console.log("The fruits were chopped"))
})

.then(()=>{

    return order(1000, ()=>{
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`)
    })
}
)

.then(()=>{

    return order(1000, ()=> console.log("THe machine was started"))
})

.then(()=>{

    return order(2000,()=>{

        console.log(` ice creame was placed on ${stocks.holder[0]}`)
    })
})

.then(()=>{

    return order(3000,()=>{

        console.log(`${stocks.topping[0]} was selected`)
    })
})

.then(()=>{

    return order (1000,()=> console.log ("Ice creame was served"))
})



.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{

    console.log("Day ended , shop is closed");
});