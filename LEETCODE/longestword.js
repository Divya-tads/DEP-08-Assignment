let str=prompt("Enter a string");
var arr= str.split(" ");
var arrlength=[];
for(let i of arr)
{
    arrlength.push(i.length);
}
var arrsort=arrlength.sort(function(a,b){return b-a});
var res= arr.filter((val)=> val.length===arrsort[0])
console.log(res);