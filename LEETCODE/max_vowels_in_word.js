let str=prompt("Enter a string");
var arr= str.split(" ");
var arrlength=[];
let vowels=['a','e','i','o','u'];

for(let i of arr)
{
    let count=0;
    for(j=0;j<i.length;j++)
    {
        if(vowels.includes(i[j].toLowerCase()))
        count+=1;
    }
    arrlength.push(count);
}
 var arrsort=Math.max(...arrlength);
 
 var res= arr.filter((val,index)=> arrlength[index]===arrsort)
console.log(res);