// trim given characters for both ends of a string 
function trim(strValue, charToTrim){  
  if(!strValue) return "";
  const pattern  = new RegExp(`^\\${charToTrim}+|\\${charToTrim}+$`,"g");

  return dt.replace(pattern, '');  
}