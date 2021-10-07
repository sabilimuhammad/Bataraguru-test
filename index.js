var numb = window.prompt('Input numbers to be separated');
var str = numb.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));

let matchingBrackets = function(str) {
	let arr = [];
	let brackets = {
		'(' : ')',
		'{' : '}',
		'[' : ']'
	}
	for ( let i = 0; i < str.length; i++) {
		if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
			arr.push(str[i]);
		} else {
			let end = arr.pop();
			if(str[i] !== brackets[end]){
				return false
			};
		}
	}
	if(arr.length !== 0) {
		return false
	};
	return true;
}

console.log(matchingBrackets("({[]})")); 
console.log(matchingBrackets("{{))"));
console.log(matchingBrackets("({[]))"));