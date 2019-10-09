const items = [
  {
    id: 1,
    name: 'foo',
    price: 2,
  },
  {
    id: 3,
    name: 'bar',
    price: 4,
  },
  {
    id: 66,
    name: 'bazz',
    price: 4,
  },
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

function query(arr, obj) {
  let returnArr = [];
  arr.forEach(item => {
    for(let key in item){
      if (item[key] === items[key]){
        returnArr.push(item)
      }
    }
  })
  return returnArr;
}

module.exports = { query, items };


//solution
const query = (arr, obj) => {
  const filterEntries = Object.entries(obj);
  return arr.filter(
    e => { return Object.keys(e).every((filterArr) => {
      const key = filterArr[0];
      const val = filterArr[1];
      return e[key] === val
    }) }
  )

}






