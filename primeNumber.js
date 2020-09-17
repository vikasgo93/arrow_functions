var arr = [2,3,4,5,6,7,8,9,10,11,12,13];

const numbers = arr.filter((number) => {
	for ( var i = 2; i < number; i++ ) {
        if ( number % i === 0 ) {
            return false;
       }
   }
   return true;
})
console.log(numbers);

