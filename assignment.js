
//write a javascript fn to get an array and to read the first element of an array.check whether it is prime or not
let a=[11,3,5,7,6,12,13,11];
console.log(a[0],a[0]%2!=0)
//write a javascript prgm to find the most frequent item of an array
let k=['s','n','s','a','s','d','s'];
let maxvalue=0;
let maxcount=0;
for (const i of k) {
    if (k[i]==null) {
        k[i]=1;
    } else {
       k[i]++;
    }
    if (k[i]>maxcount) {
        maxvalue=i;
        maxcount=k[i];
    }
}
console.log('value' , '=' , maxvalue ,'count' , '=' ,maxcount)
//write a javascript for loop that will iterate from 0 to 15.for each iteration,check if the current number is odd or even,and display the msg to the screen as odd or even
for (let i = 0; i < 15; i++) {
    if (i%2===0) {
        console.log(i+ 'is even');
    } else {
       console.log(i+ 'is odd');
    }
    
}
//write a javascript prgm to find the sum of squares of the elements of an array
let array=[1,2,3,4,5,7];
let sum=0;
for (let i = 0; i < array.length; ++i) {
    sum += array[i]*array[i];
    console.log(sum);
   }
   

