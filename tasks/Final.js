let friends=[{
  name: "Pavel",
  age:23,
  gender:"Man",
  'work': null,
  CreateWork(name){
  this.work= name;
},
  sayFullInfo(){
      return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
  }
  },
   {
  name: "Egor",
  age:19,
  gender:"Man",
  'work': null,
  CreateWork(name){
  this.work= name;
},
  sayFullInfo(){
    return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
}
  },
  {
  name: "Viktoria",
  age:19,
  gender:"Woman",
  'work': null,
  CreateWork(name){
  this.work= name;
}  ,
   sayFullInfo(){
    return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
}
  },
  {
  name: "Alexander",
  age:21,
  gender:"Man" ,
  'work': null,
  CreateWork(name){
  this.work= name},
  sayFullInfo(){
    return `Имя - ${this.Name}, Возраст-${this.Age}, Пол -${this.Gender}`
}
  },
  {
  name: "Jaroslav",
  age:19,
  gender:"Man",
  'work': null,
  CreateWork(name){
  this.work= name},
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


let delobj=((i)=>friends.splice(i,1));


let findwoman = friends.filter((item)=>item.Gender==="Woman");

let unemployed = friends.filter((item)=>item.Work==null);

//let addfriend=friends.push((name,age,gender)=>({"name":name,"age":age,"gender":gender}));


let findman = friends.filter((item)=>item.Gender==="Man");
 friends[0].CreateWork("developer");

let showjob=((arr)=> arr.map((item)=>item.work));
  
let sameage= (arr) => `${arr.map(item => item.age).filter((item, pos, arr) => pos !== arr.indexOf(item)).join(`, `)}`


let getyear=((arr)=>arr.map((item)=> `Имя -${item.name }` +" "+ (`Возраст -${new Date().getFullYear()-item.age}`)));

