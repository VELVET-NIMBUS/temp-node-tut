let stocks = {
    Fruits : ["strawberry", "grapes","banana","apple"],
    liquids :["water","ice"],
    holder : ["cone","cup","stick"],
    topping : ["chocolate","peanuts"],

};

let order = (Fruit_name,call_production) =>{
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    },2000);
    
};

let production = () => {

    setTimeout(()=>{
        console.log("production has started");

        setTimeout(()=>{
            console.log(" the fruit has been chopped ");

            setTimeout(()=>{
                console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);
                setTimeout(()=>{
                    console.log("the machine was started");

                    setTimeout(()=>{
                        console.log(`Ice cream was placed in ${stocks.holder[0]}`)

                        setTimeout(()=>{
                            console.log(`${stocks.topping[0]} was used as topping`)
                            setTimeout(()=>{
                                console.log("Ice creame is being served");
                            },2000);
                        },3000);
                    },2000);
                },1000);
            },1000);
        },2000);
    }, 1000);
};

order(0,production);