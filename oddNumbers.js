console.log(oddNumbers([1,3,2,5,6,9,23]));

function oddNumbers(arr){
	const numbers = arr.filter((number) => {
		return number%2!=0;
	})
	return numbers;
}