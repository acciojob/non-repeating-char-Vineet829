function firstNonRepeatedChar(str) {
  for(let i of str){
	  if(str.indexOf(i) === str.lastIndexOf(i)){
		  return i
	  }
  }
return null  
}
	

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
