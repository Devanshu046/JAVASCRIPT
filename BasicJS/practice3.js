// let marks= [85,97,44,37,76,60];
// let sum = 0 ;
// for(let i of marks){
//     sum+=i;
// }
// console.log("average marks:" , sum/marks.length);


let price= [250,645,300,900,50];
let offer = 0;

for (let j=0 ; j<price.length ; j++){
    // offer = price[j]/10;
    // price[j] -= offer
    // offer=0;
    price[j] = (price[j]*90)/100;


    console.log("after 10% off :" , price[j]);
}