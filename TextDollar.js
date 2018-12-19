var inquirer = require('inquirer');
GetNumber();
function GetNumber()
{
    inquirer.prompt([
      {
    name: "numberToConvert",
    type: "input",
    message: "Enter a whole number greater than 1 and less than 1 billion: "
      }
    ]).then(function(answer) {
      
      var tempX=answer.numberToConvert;
      if(isNaN(parseInt(tempX))||parseInt(tempX)<2 ||parseInt(tempX)>1000000000)
      {
          console.log("Please enter a valid number");
          GetNumber();
      }
      else {
          theNumber=Math.round(tempX);
          theString=theNumber.toString();
          console.log(Convert(tempX));
        }
    });
}



function Convert(num) {

    let curWord="";
    
    let theString = num.toString();
    const oneToNineteen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const scales = ['', 'Thousand', 'Million', 'Billion'];

    let start = theString.length;
    let parts = [];
    while (start > 0) {
        let end = start;
        //split into groups of three or less starting with last three
        parts.push(theString.slice((start = Math.max(0, start - 3)), end)); 
        //console.log(parts);
    }

    let partsLen = parts.length;
    // if (partsLen > scales.length) {
    //     return '';
    // }

    let words = [];
    for (var iI = 0; iI < partsLen; iI++) {

        let curParts = parseInt(parts[iI]);

        if (curParts) {
            //split and reverse the current parts
            let curNums = parts[iI].split('').reverse().map(parseFloat);
            //console.log(curNums)
            if (curNums[1] === 1) {
                curNums[0] += 10;
            }

            if (scales[iI]!=null) {
                curWord=scales[iI];
                words.push(curWord);
            }

            if (oneToNineteen[curNums[0]]!=null) {
                curWord = oneToNineteen[curNums[0]];
                words.push(curWord);
            }

            if (tens[curNums[1]] !=null) {
                curWord = tens[curNums[1]];
                words.push(curWord);
            }
            if (oneToNineteen[curNums[2]] !=null) {
                curWord = oneToNineteen[curNums[2]];
                words.push(curWord + 'Hundred');
            }

        }

    }

    return words.reverse().join('')+"Dollars";

}