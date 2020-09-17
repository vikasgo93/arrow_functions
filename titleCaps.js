console.log(capitalizeTitle(["hello", "hi", "vikas", "anant", "mini"]));

function capitalizeTitle(arr){
	const letters = arr.map((letter) => {
		return letter.charAt(0).toUpperCase() + letter.slice(1);
	});
	return letters;
}