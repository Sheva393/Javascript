function accum(arr){
    let str=arr.toUpperCase().split("");
    
   
  return str.reduce((acc,item,index) => acc+"-"+item+item.repeat(index).toLowerCase());
   
  
   
  }
  console.log(accum("Vlad"));