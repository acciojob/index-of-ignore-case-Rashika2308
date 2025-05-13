function indexOfIgnoreCase(str, subStr) {
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  return lowerStr.indexOf(lowerSubStr);
}
console.log(indexOfIgnoreCase("Hello World", "world")); 
console.log(indexOfIgnoreCase("apple", "Ple"));         
console.log(indexOfIgnoreCase("test", "aaa"));          
console.log(indexOfIgnoreCase("OpenAI", ""));           
console.log(indexOfIgnoreCase("", "a"));                

