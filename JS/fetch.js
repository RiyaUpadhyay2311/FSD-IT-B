const username = "RiyaUpadhyay2311"
const url = `https://api.github.com/users/${username}`;

const pr = fetch(url);

 pr.then(function(res){
  return res.json();//so that data not give undefined
})
.then((data)=>{
    console.log("Data:",data);
})
.catch((error)=>{
    console.log("Error=",error)
})
// .finally(()=>{
//     console.log("inside finally")
// })