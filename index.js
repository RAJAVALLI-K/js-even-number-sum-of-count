//even number using in sum of number and count 

let array = [1, 36, 62, 15, 66, 88, 5, 18, 90];
function evenNum(array) {
    let sum = 0, count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum += array[i];
            count++;
            console.log("even number:" + array[i]);
            //console.log(sum);
        }
    }
    return sum / count;
}
console.log(evenNum(array));
document.write("Even number sum and count array values :" + ((evenNum(array))));