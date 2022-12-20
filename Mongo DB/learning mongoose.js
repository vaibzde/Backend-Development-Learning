
const mongoose = require(`mongoose`)

async function connectToMongoDB() {
  try {
    return await mongoose.connect("mongodb://127.0.0.1:27017/twitteride");
  } catch (err) {
    console.log("Error: ", err.message);
  }
}
async function fxn1() {
 await connectToMongoDB();
 console.log("hello")
 let engineSchema = mongoose.Schema({
  horsePower: Number,
  cc: {//defining validator as well
      type : Number,
      validate : {
          validator : nums => nums>1000,
          message : props => `${props.value}, very low cc engine`
      }
  }
 })
 //defining schema
  let carsSchema =  mongoose.Schema({
      brand : String,
      model : String, 
      engine : engineSchema
  })   
let cars = mongoose.model(`Cars`,carsSchema)
//will create a collection of Cars with carsSchema as a schema of it
 cars.create(
    {"brand" : "Toyota", "model" : "Fortuner"}
).then(data => console.log("success")).catch(err => console.log("error"));
}
console.log("21213")
fxn1()

// connectToMongoDB().then( () => {
// .then(console.log("complete"))

