function randomNumber (min, max) {
  if (min >= 0 && max >=0 && max > min){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  } else {
    return -1;
  };
};


function stringLength (str, maxLength){
  return str <= maxLength;
};


