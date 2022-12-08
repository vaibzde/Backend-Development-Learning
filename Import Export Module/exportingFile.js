let myGarrage = {
    Fortuner : {Car_Name: "Toyota Fortuner",
                Model: 2023,
                PurchaseYear: 2023,
                Price: 5200000,
                Color: "White"},
    XUV700 : {
            Car_Name: "Mahindra XUV700",
            Model: 2022,
            PurchaseYear: 2023,
            Price: 2500000,
            Color: "White"},
    Harrier : {
            Car_Name: "Tata HArrier",
            Model: 2022,
            PurchaseYear: 2023,
            Price: 2400000,
            Color: "White"
    }
}

myGarrage.Scorpio = {
    Car_Name: "Mahindra Scorpio N",
    Model: 2022,
    PurchaseYear: 2023,
    Price: 2200000,
    Color: "White"
}

function insurancePrice(price){
    return price*0.015
}

exports.myGarrage = myGarrage;
exports.insuranceFxn = insurancePrice;

console.log(module)