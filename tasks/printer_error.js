function printer_error(str){
    let a1 = []
    let arr=str.split("");
    arr.forEach((i) => i >='m' && a1.push(i));
     return a1.length+"/"+arr.length
  }
  console.log(printer_error("dfkjajshkfjskjafhscajskx"))