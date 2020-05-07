function spam(str){
    return str.replace(/[aeiou]+/ig, '');  
  }

  
  
  function spam(string) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
      if (string[i] != "a" && string[i] != "e" && string[i] != "i" && string[i] != "o" && string[i] != "u") {
        return newString += string[i];
      };
    };
  };
  