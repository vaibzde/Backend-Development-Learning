const mongoose = require(`mongoose`)
mongoose.connect("mongodb://127.0.0.1:27017/twitter", { useNewUrlParser: true }, function(error) {
  if (error) {
    console.log("Error connecting to MongoDB:", error.message);
  } else {
    console.log("Connected to MongoDB");
  }
});

let carsSchema = new mongoose.Schema({
  brand: String,
  model: String
});

let Cars = mongoose.model("Cars", carsSchema);

Cars.create({ brand: "Maruti", model: "Swift" })
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));
