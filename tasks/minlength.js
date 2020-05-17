function simple(s){
    return s.split(" ").sort(function(a,b){
      return a.length - b.length;
    }).shift().length
   }
   console.log(simple("алывоат влыаоыв вдаоы выолавыа ывавы алоыват"));