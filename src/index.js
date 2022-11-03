const people =fetch("https://636377be8a3337d9a2de855b.mockapi.io/people",{
    method:"POST",
    body:{
        fname:"Jeyhun",
        fsurname:"Mustafayev",
        fage:"16",
        id:"1",
    }
})
const man={
    fname:"Ibrahim",
    fsurname:"Aliyev",
    fage:"19",
    id:"3",

}

function setData(data){
    fetch("https://636377be8a3337d9a2de855b.mockapi.io/people",{
        method:"POST",
        body:JSON.stringify(data),
    })
}
setData(man)
people.then((item)=>item.json()).then((data)=>console.log(data));
