var data = require("../dummyData/aggregatedData");
var mongoose = require("mongoose");
var Product = require("./models/modelSchema");

mongoose.connect("mongodb://localhost/hackazon");

let insertOne = (item, callback) => {
  Product.ProductModel.create(item, callback);
};

var seedDb = function(data) {
  let insertionCount = 0;
  let insertionTarget = data.length;
  data.forEach(element => {
    let newDoc = new Product.ProductModel({
      id: element.id,
      name: element.name,
      price: element.price,
      weight: element.weight,
      dimensions: element.dimensions,
      color: element.color,
      category: element.category,
      image_url: element.image_url,
      overallReview: element.overallReview,
      numberOfRatings: element.numberOfRatings
    });
    // console.log('newDoc = ', newDoc);
    insertOne(newDoc, err => {
      if (err) {
        console.log("Doc save error", err);
        insertionCount += 1;
        if (insertionCount === insertionTarget) {
          console.log('disconnecting database');
          mongoose.disconnect();
        }
      } else {
        console.log("Doc saved!", element.id);
        insertionCount += 1;
        if (insertionCount === insertionTarget) {
          console.log('disconnecting database');
          mongoose.disconnect();
        }
      }
    });
  });
};


seedDb(data.aggregate);
