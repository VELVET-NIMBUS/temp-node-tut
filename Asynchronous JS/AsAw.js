let stocks = {
    Fruits : ["strawberry", "grapes","banana","apple"],
    liquids :["water","ice"],
    holder : ["cone","cup","stick"],
    topping : ["chocolate","peanuts"],

};


let is_shop_open = true;

let toppings_choice = ()=>{

    return new Promise ((resolve,reject)=>{
     setTimeout(()=>{

        resolve(
            console.log("Which topping would you like"));
        },3000);
    });
};

async function kitchen (){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    await toppings_choice()

    console.log(" D ")
    console.log(" E ")
    
}

kitchen()

console.log("doing the dishes")
console.log("cleaning the table")
console.log("Taking orders")