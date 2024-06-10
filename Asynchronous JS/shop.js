let stocks = {
    Fruits : ["strawberry", "grapes","banana","apple"],
    liquids :["water","ice"],
    holder : ["cone","cup","stick"],
    topping : ["chocolate","peanuts"],

};


let is_shop_open = true;

function time(ms){

    return new Promise ((resolve,reject)=>{

        if (is_shop_open){
            setTimeout(resolve,ms)
        }

        else{
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen (){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`);

        console.log("start the production");

        await time(2000)
        console.log("cut the fruits")

        await time(1000)
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice creame was placed in ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.topping[0]} was selected as topping`)

        await time (2000)
        console.log("Ice creame is served")

    }

    catch(error){
        console.log("customer left",error)
    }

    finally{
        console.log("Day ended shop is closed")
    }
}

kitchen();