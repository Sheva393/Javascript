String.prototype.toJaddenCase = function (str) {
    return str.split(" ").map(item => item[0].toUpperCase()+item.substring(1)).join(" ");
  }
  
  
  
  let a = "afkjka safjks asjkflsa asfa";
  console.log("".toJaddenCase(a));