/* path ki need hi kyu pdi????
microsoft linux mac book vlo ko diff dikhana tha kisi ne / kisi ne \\ ya jo bhi

pnge hoge developer k sath string / , \,//,\\ kisse bnaye    
isliye aaya path.....................................................................................................................
*/




// koi bhi file ka path copy kro yha likho  " " me
"E:\Node Module\childProcess.js"
"E:\Node Module\os.js"

// kisi m ek / ek \ ek // ek \\ hota hai 

// isi prblm ki vjh se aaya path

let path=require("path");
//console.log(path)
// path bhi kya hai object iske pass diff keys hai


let extensionName = path.extname("E:\Node Module\childProcess.js");//file ka extension nikal k de deta hai
console.log(extensionName);


let basename=path.basename("E:\Node Module\os.js"); // file ka name de deta hai
console.log(basename);

// baar baar path thodi copy krte rhege

console.log(__dirname); // directory ka path dediya jisme hmari file hai

// lakin hme to directory ka path nhi chahiye file ka chahiye
console.log(__filename); // file ka path milgya 


let dirPath= __dirname;
console.log(dirPath)


let newFilePath=path.join(dirPath,"test.js"); /* dir tk ka path hai uske aage file ka naam likhu ya to manually krlu ya code join method use krke 
hme thodi pta ki ek slash lgana hai 2 isliye join method use krte hai */
console.log(newFilePath)