
function findNumber(arr,num) {
    let index =-1;
    for (let i = 0; i < arr.length; i++) {
        if (num==arr[i]){
           index = i;
        }
    }
    return index;
}
let arr = [1,5,8,9,-1,7];
findNumber(arr,1);
