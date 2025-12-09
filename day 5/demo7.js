/*let nums = [10, 2, 3];
// var s=0
// for(let i of nums)
//   s=s+i
// console.log(s)
 let ans=nums.reduce((a,b)=>{
return a+b;
 })
 console.log(ans)*/


 /*let nums = [10,2,30,900];

 let ans=nums.find((a)=>{
    return a>20;
 })
 console.log(ans)*/

/*let person={
  name:"demo",
  dep:"IT"
}
console.log(person)
console.log(person.name)*/

/*let person= new Object()
person.name="demo"
person.gender="male"
console.log(person)
console.log(person.name)*/

function Person(name,gender){
 
    console.log("the val", this.name, name)
    this.name=name;
    this.gender=gender;
  
}

let p1= new Person("demo","male")
console.log(p1)