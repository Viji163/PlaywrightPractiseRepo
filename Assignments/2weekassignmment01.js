//Given a string s consisting of words and spaces, return the length of the last word in the string./

let a = "Hello World"
console.log("length of :",a.length);// which give total length of the array
let s = a.trim()
let str = s.split(" ")
console.log(str);
let lastword = str[str.length-1]
console.log("The last would is printed as:",lastword);
console.log("The length of the last word is:",lastword.length); 

//second one 
let q = " fly me to the moon "
console.log("length of :",q.length);
let p = q.trim()
let secondStr = p.split(" ")
console.log(secondStr);
let slastword=secondStr[secondStr.length-1];
console.log("The last would is printed as:",slastword);
console.log("The length of the last word is:",slastword.length); 


//3.function
function isAnagram(str1, str2) {
  console.log("Original:", str1, str2);

  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();
  console.log("Sorted arrays:", arr1, arr2);

  let joined1 = arr1.join("");
  let joined2 = arr2.join("");
  console.log("Joined strings:", joined1, joined2);

  return joined1 === joined2;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   






