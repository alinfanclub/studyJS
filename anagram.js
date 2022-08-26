const strA = "listen";
const strB = "silent";

//! #1 split(), sort(), and join()

// function isAnagram(a, b) {
//     if(a.length !== b.length) {
//         return false
//     }
//     return a.split("").sort().join() === b.split("").sort().join();
// }

// console.log(isAnagram(strA, strB));


//! #2 map = ()
function isAnagram(a,b) {
    if(a.length !== b.length) {
       return false 
    }
    const hashMap = {}
    for (const char of a) {
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1
    }

    for(const char of b) {
        if (!hashMap[char]) {
            return false;
        }
        hashMap[char]--;
    }

    return true
}
console.log(isAnagram(strA, strB));
