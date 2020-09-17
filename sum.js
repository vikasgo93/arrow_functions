console.log(sumArray([1,2,3,4,5,6]));

function sumArray(arr){
	const numbers = arr.reduce((total, num) => {
			return total+num;
	},0);
	return numbers;
}