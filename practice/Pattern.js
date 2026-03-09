// Left Triangle
const num = 5;
for(let i = 0; i < num; i++){
    let row = "";
    for(let j = 0; j < i; j++){
        row += "* ";
    }
    console.log(row);
}

// Right Triangle
const number = 5;
for(let i = 0; i < number; i++){
    let row = "";
    for(let j = 0; j < num - i; j++){
        row += "* ";
    }
    console.log(row);
}

const nums = 5;
for(let i = 0; i < nums; i++){
    let row = "";
   
  for(let j = 0; j < nums - i; j++){
      row += " ";
  }
  for(let k = 0; k < i; k++){
      row += "*";
  }
    console.log(row);
}


// Full Pyramid
const num1 = 5;
for(let i = 0; i < num1; i++){
    let row = "";
   
  for(let j = 0; j < num1 - i; j++){
      row += " ";
  }
  for(let k = 0; k < i; k++){
      row += "* ";
  }
    console.log(row);
}
