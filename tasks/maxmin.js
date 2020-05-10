let list = ("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6");
function max(arr){
let item = arr.split(' ');
  let min = Math.min.apply(null, item);
  let max = Math.max.apply(null, item); 
  let result = {MAX:max,
                MIN:min};
  return result
}
  
console.log(max(list));