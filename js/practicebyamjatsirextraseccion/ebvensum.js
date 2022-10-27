
const arr=[2,4,5,4,7,17,3,12,7,2]

const sum =arr
.filter(item=> item%2!==0)
.reduce((acc,cur)=>acc+cur)

console.log(sum)