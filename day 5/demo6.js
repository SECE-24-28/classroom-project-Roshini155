/*a=[3,2,4];
 const b=a.map((d)=>{return d*2})
 console.log(b)
// arr=[];
// for (var i=0;i<a.length;i++){ 
//      arr.push(a[i]*2)
// }
// console.log(arr)*/

/*let nums = [10,1,2,4,5,12, 20, 30, 40];
 
const a=[]
for(let d of nums)
{
   if(d>=20)
   {
    a.push(d)
   }
}
console.log(a)*/

/*let nums = [10,1,2,4,5,12, 20, 30, 40];
 
const a=[]
for(let d of nums)
{
   if(d%2==0)
   {
    a.push(d)
   }
}
console.log(a)*/


// const a=[]
// for(let d of nums)
// {
//    if(d%2==0)
//    {
//     a.push(d)
//    }
//}
let nums = [10,1,2,4,5,12, 20, 30, 40];
 const a=nums.filter((d)=>{ return d%2==0})
  console.log(a)

