/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = arr.filter(item => item.startsWith("b")).length;


module.exports = result;