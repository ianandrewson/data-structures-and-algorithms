function bracketValidation(string) {
  let leftSquareCount = 0;
  let leftParanCount = 0;
  let leftCurlyCount = 0;
  let rightSquareCount = 0;
  let rightParanCount = 0;
  let rightCurlyCount = 0;

  const ary = string.split('');
  ary.filter(char => {
    if(char === '(' || char === ')' || char === '{' || char === '}' || char === '[' || char === ']'){
      return char;
    }
  });
  ary.forEach(char => {
    if(char === '('){
      leftParanCount++;
    } else if(char === ')'){
      rightParanCount++;
    } else if(char === '{'){
      leftCurlyCount++;
    } else if(char === '}'){
      rightCurlyCount++;
    } else if(char === '['){
      leftSquareCount++;
    } else if(char === ']'){
      rightSquareCount++;
    }
  });
  if(leftCurlyCount === rightCurlyCount && leftParanCount === rightParanCount && leftSquareCount === rightSquareCount){
    return true;
  } else return false;
}

module.exports = {
  bracketValidation
};
