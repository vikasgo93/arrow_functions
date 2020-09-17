var strings = ["malayalam","madam","vikas","level","mini","anant","radar"];

const palindromes = strings.filter((string) => {
	return string.split("").join("") === string.split("").reverse().join("");
	});
console.log(palindromes);
