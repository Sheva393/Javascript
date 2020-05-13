function pincode(value){
    if ( (value.toString().length === 4 || value.toString().length === 6) && Number.isInteger(value) ) {
      return true
    }
    else   {
      return false
   }
    
  };
  console.log(pincode(1234));
  
  
  
  
  