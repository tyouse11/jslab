//Part 1
//old code
const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz
Master,58\n98,Bill,Doctor’s Assistant,26`

for (const s of str) {
 	if (s == ",") {
 		continue
 	}else if (s == "\r" || "\n"){
        console.log("\n")
    }
	console.log(str);
    break
}

//new code
// let arr = [`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`]

// for (const a of arr) {
//     if (a === "\n") {
//         continue
//     }
   
// }
// console.log(arr)


//Part 1

let csvArray = [
    "ID, Name, Occupation, Age", 
    "42, Bruce, Knight, 41", 
    "57, Bob, Fry Cook, 19",
    "63, Blaine, Quiz Master, 58",
    "98, Bill, Doctor's Assistant, 26"  
  ];
  
  
  console.log(csvArray);
  

  //Part 2
  
