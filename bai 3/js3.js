
function countvowel(arr) {
    let vowel = ["a", "o", "e", "u", "i"];
    let count = 0;
    let check = true;
    for (let i = 0; i < vowel.length; i++) {
        for (let j = 0; j < arr.length ; j++) {
            if(vowel[i]==arr[j]){
                count +=1;
            }
            
        }

    }

    if(count!=0) {
        return count;
    }
   return  check = false;
}
let a = ["a","i","r","g","p"];
countvowel(a)
