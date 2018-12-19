var inquirer = require('inquirer');
    res = [];
    days=[];
     gainsLosses=res;
GetInput();
function GetInput()
{
    inquirer.prompt([
      {
    name: "numbers",
    type: "input",
    message: "Enter number of days in the market and then the gain/losses with a space between: "
      }
    ]).then(function(answer) {
      
        res = answer.numbers.split(" ");
        days=res[0];
        gainsLosses=res;
        gainsLosses.shift();
        if(days<1 || isNaN(parseInt(days)))
        {
            console.log("Must be at least one day!")
            GetInput();
        }
        //console.log(gainsLosses.length)
        else if(gainsLosses.length != days)
        {
            console.log("Must be a gain/loss for each day in the market.")
            GetInput();
        }
        else {
            for (let iI=0;iI<gainsLosses.length;iI++)
            {
                if(isNaN(parseInt(gainsLosses[iI])))
                {
                    console.log("Must use numbers.")
                    GetInput();
                    return;
                }
            }
            console.log(FigureItOut(gainsLosses))
        }
        //console.log(days+"G/L: "+gainsLosses)
    });
}


function FigureItOut(arr) {
    let maxProfit = 0;
    let partialProfit = 0;
  
    for (let iI=0;iI<arr.length;iI++) { 
      partialProfit += parseInt(arr[iI]);
      maxProfit = Math.max(maxProfit, partialProfit);
      if (partialProfit < 0) partialProfit = 0;
    }
  
    return maxProfit;
  }
  
  