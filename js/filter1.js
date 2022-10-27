const item =[
    {name:"bike",price:100},
    {name:"tv",price:100},
    {name:"mobile",price:100},
    {name:"macbook",price:100},
    {name:"hp laptop",price:100},
    {name:"car",price:100},
]
const filteredItems=item.filter((item)=>{
    return item.price<=100
})
console.log(item)