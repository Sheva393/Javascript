function invert(arr){
    let a=[];
    let i=0;
    if (arr[i]<0){
      arr.map((i)=> a.push(+i))
    }
     else {
      arr.map((i)=> a.push(-i))
     }
    return a
  }
  console.log(invert([1,3,-5]));