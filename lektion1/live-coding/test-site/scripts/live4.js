/*
Tasks: Make a function that does the following:
Take an input from the user using prompt()
Check if the entered value is a number or not.
If this condition is true, loop through 1 and the entered number. Print each iteration of the loop in the console.
Otherwise, write an error message using alert: “This is not a number”

Call the function from the JS file
*/

const checkInput = function()
{
	let userInput = prompt("Enter a number: ");

	let userNumber = Number(userInput);

	if (!Number.isNaN(userNumber))
	{
		for(let n = 1; n <= userNumber; n++)
		{
			console.log(n);
		}	
	}
	else
	{
		alert("This is not a number");
	}
	
	return "Called";
}

let status = checkInput();

console.log(status);