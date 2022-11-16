//foreach

const array1=[3,4,3,54,65,6,7,7]
const array5 =array1.forEach((value)=>{
    console.log( value*2)
})

//map function working


const array=[1,2,3,4,5,6]
let newarray=array.map((value,index,array)=>{
    console.log(value,index,array)
    return value*2;
})
console.log(newarray)

//filter function


const array2=[4,4,56,6,4,,3,44]
array2.filter((value)=>{
    return value>4
})
console.log(array2)



const aray3=[2,3,4,5,34,5,6,4,32]
const value=aray3.reduce((p1,p2)=>{
    return p1+p2

})
console.log(value)