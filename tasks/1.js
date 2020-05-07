function findNextSquare(sq) {
    let sqrt=Math.sqrt(sq);
    if ( Number.isInteger(sqrt) ) {
      return (Math.pow(sqrt+1,2));
    }
      else {
        return sqrt=-1;
      }
    }
    
    
