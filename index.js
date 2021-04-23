// Code your solutions in this file

const array = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';
let newArray=[];


function writeCards(array, event) {
  for (let i = 0; i < array.length; i++) {
    newArray[i] = "Thank you, " + array[i] + ", for the wonderful " + event + " gift!";
  }
 
  return newArray;
}
 
writeCards(array, event);


function countDown(){
  let countDown = 10;
  while (countDown > -1) {
    console.log(countDown--)
  }
}