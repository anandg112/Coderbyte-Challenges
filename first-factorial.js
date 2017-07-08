function FirstFactorial(num){
  if(num === 1) {
 // console.log(1); 
  return 1;
  } 
  return num * FirstFactorial(num - 1); //recursive solution
  }


FirstFactorial(3);
