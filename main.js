
//problem1
function hasUniqueElements(array) {
    return (new Set(array)).size === array.length;
}

console.log(hasUniqueElements(["a", "b", "c"]));
console.log(hasUniqueElements(["a", "a", "b", "c"]));

//problem2

function evenSum(array) {
    return array.reduce((acc, item) => {
        //if quadratic of some number is even => the number is even
        if (item % 2 === 0) acc += item;
        return acc;
    }, 0)
}

console.log(evenSum([1, 2, 3, 4, 5, 6]));

//problem3
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("eye"));
console.log(isPalindrome("anana"));
console.log(isPalindrome("notpoly"));

//problem4

function sortStringLetters(str){
    return str.split("").sort().join("");
}
function findAnagrams(str, array) {
    let sortedMainString = sortStringLetters(str);
    return array.reduce((anagrams, item)=>{
        if(sortStringLetters(item) === sortedMainString){
            anagrams.push(item);
        }
        return anagrams;
    }, []);
}


console.log(findAnagrams("listen", ["enlists", "google", "inlets", "banana"]));
console.log(findAnagrams("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]));

//problem5
//Done :))

