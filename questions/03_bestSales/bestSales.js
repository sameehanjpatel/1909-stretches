const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let greatestSale = sales[0]["amount"]
  let greatestId;
  let totalSale;
  for(i=0; i<sales.length; i++){
    if(sales[i]["amount"]> greatestSale){
      greatestSale =  sales[i]["amount"];
      greatestId = sales[i]["productId"];
    }
  }
  for(j = 0; j < sales.length; j++) {
    if(sales[i]["productId"] === greatestId){
      totalSale += sales[i]["amount"];
    }
  }

 return greatestId[totalSale];
}




module.exports = { bestSales, sales };
