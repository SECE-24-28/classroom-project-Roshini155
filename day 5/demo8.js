/*console.log("hai 1")

setTimeout(()=>{
    console.log("hello")
},2000)
console.log("hai3")*/

/*function display(){

  console.log("im inside the method")
  setTimeout(()=>{
    console.log("im inside the timer")
  },3000)
}

display();
console.log("bye")*/

/*function add (show){
    istrue=true
    if(istrue)
    {
        show()//display
    }
}
console.log("welcome")
add(display)
function display(){
    console.log("it's good")

}*/
    
/*function add(display){
istrue=true
if(istrue)
{
 display("shalini")//display
}
}
console.log("welcome")
add(display)
function display(name){
console.log("it's good",name)
}*/

/*let myPromise= new Promise((resolve,reject)=>{
    let isTrue=false
    if(isTrue)
    {
      resolve()
    }
    else 
      reject()
  })

  myPromise.then(success)
  .catch(fail)

  function success(){
    console.log("done!....................")
  }
  function fail()
  {
    console.log("not done")
  }*/

   /* function display(){
        return new Promise((resolve,reject)=>{
            let isTrue=true
            if(isTrue)
            
                resolve(1000)
            }
            else
                reject()
        })
    }

    display().then((data)=>{
        console.log("done!.........",data)})
        .catch(()=>{console.log("not done")})*/


function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject("bye")
  })
  }
   

//  display().then((data)=>{ console.log("done!....................",data)})
//   .catch(()=>{console.log("not done")} )




/*async function loadData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users")
        var data=await res.json()
        console.log(data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
loadData()*/


/*async function createData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:"shalini",
           gender:"female"
        })
        });
        var data=await res.json()
        console.log(data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
createData()*/


/*async function updateData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:"shalini",
           gender:"female"
        })
        });
        var data=await res.json()
        console.log("updated",data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
updateData()*/



async function deleteData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method:"DELETE"
        });

        console.log("deleted......",res)
        


        console.log("updated",data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
deleteData()







  
  
