let maxmin = (arr) => ({MAX:Math.max.apply(null, arr),MIN:Math.min.apply(null, arr)});

let a= [1,2,3,123,555,777,];
console.log(maxmin(a));