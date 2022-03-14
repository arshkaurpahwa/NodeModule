/* WHAT IS NODE?
SIMPLE RUNTIME ENVIRONMENT

JAVASCRIPT  sirf browser pr run krne k liye bni thi

hm apne system pr run ni kr skte the 

isliye aaya node 

ye sirf code hi run nhi krta  blki apne sath kuch FEATURES bhi lata hai
*/

let cp=require('child_process');   //  ye line ye btati hai ki hm child process use krege 
console.log(cp);
// print hone k baad hme pta chlta hai ki ye ek object hai 
// run krne pr pta chla ki childprocess kya hai ? object hai


 // open calculator with the help of this file
 // windows me calc likhte hai 
 // ubuntu me gnome likhte hai
 cp.execFileSync("calc");  // run krne pr calculator open hota hai


 

 // child process vli file se abc.js vli file chl jaye
 let content = cp.execSync("node test.js");
 console.log("output of testjs file : "+content);
 console.log(content);   // by default string mnhi aata hexadecimal ya binary m de deta hai 
 console.log(""+content) // ek simple si empty string bhi daal do to vo usko string leta hai







