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
//Part 1

let csvArray = [`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`]

for (let i = 0; i < csvArray.length; i++){
    console.log(csvArray[i])
}
  

  //Part 2
  //Declare a variable that stores the number of columns in each row of data within the CSV.
 
  let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

  // Split the CSV data into rows based on newline character '\n'
  let rows = csvData.split('\n');
  
  // Initialize a two-dimensional array to store CSV data
  let csvArray2 = [];
  
  // Process each row to split columns and store in the array
  rows.forEach(row => {
    let columns = row.split(','); // Split each row into columns based on comma ','
    csvArray2.push(columns);
  });
  
  console.log(csvArray2);


  //Part 3
