function sumArr(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
         sum += arr[i];
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5];

const result = sumArr(arr);

console.log("arr", result);