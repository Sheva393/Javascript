let friends=[{
  "Name": "Pavel",
  "Age":23,
  "Gender":"Man",
  "Work": null,
  CreateWork(name){
  this.Work= name;
},
  sayFullInfo(){
      return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
  }
  },
   {
  "Name": "Egor",
  "Age":19,
  "Gender":"Man",
  "Work": null,
  CreateWork(name){
  this.Work= name;
},
  sayFullInfo(){
    return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
}
  },
  {
  "Name": "Viktoria",
  "Age":19,
  "Gender":"Woman",
  "Work": null,
  CreateWork(name){
  this.Work= name;
}  ,
   sayFullInfo(){
    return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
}
  },
  {
  "Name": "Alexander",
  "Age":21,
  "Gender":"Man" ,
  "Work": null,
  CreateWork(name){
  this.Work= name},
  sayFullInfo(){
    return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
}
  },
  {
  "Name": "Jaroslav",
  "Age":19,
  "Gender":"Man",
  "Work": null,
  CreateWork(name){
  this.Work= name},
  sayFullInfo(){
    return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
}
  }];

 

let maxage = friends.reduce((prev, cur) => {
  if (prev.Age > cur.Age) {
    return prev
  }
  return cur
  });
 
let mediumage = friends.reduce((prev,cur)=>prev + cur.Age/5,0);


function delobj(i){
    return friends.splice(i,1);
};

let findwoman = friends.filter((item)=>item.Gender==="Woman");

let unemployed = friends.filter((item)=>item.Work==null);

function addfriend(name,age,gender){
    return friends.push({"Name":name,"Age":age,"Gender":gender});
};

let findman = friends.filter((item)=>item.Gender==="Man");


let showjob = friends.filter((item)=>item.Work!==null) ;

let sameage=friends.filter((elem,pos,arr)=>pos!==arr.indexOf(elem) || pos!==arr.lastIndexOf(elem));


function getyear(age){
    return new Date().getFullYear()-age;
}

console.log(sameage);