function randomNumber (min, max) {
  if (min >= 0 && max >=0 && max > min){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  } else {
    console.log("Введите верное значение")
  }
}
console.log(randomNumber(8, 15));

function stringLength (str, maxLength){
  if (maxLength <= 140){
    return true;
  } else {
    return false;
  }
}

console.log(stringLength(1, 110))
