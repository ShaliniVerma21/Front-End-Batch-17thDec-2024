//1.  Star Pattern

// define number of rows
let rows=5;
let Pattern = '';

// loop through each row (outer loop = rows)
for (let i = 0; i < rows; i++) {
    // loop through each column (inner loop = columns)
    for (let j = 0; j <= i; j++) {
        // print star
        Pattern += '* ';
    }
    // print new line after each row
    Pattern += '\n';
}

console.log(Pattern);