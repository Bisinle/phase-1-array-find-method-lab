const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

// code your solution here
// let finder = record.find((record,superbowlWin)=>{
//     let myResult = null
//     for (const item of record) {
//         if (superbowlWin(item) === true){
//             myResult = item.year

//         }
        
//     }
//     return myResult
// });
// function superbowlWin(item) {
//     return item.result === "W";
//   }


function  superbowlWin(record){
    for (const item of record) {
        if (item.result === "W"){
            return item.year
        }
        
    }
}
let finder = record.find(superbowlWin)
console.log(finder);