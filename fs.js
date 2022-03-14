let fs=require("fs");
//console.log(fs)

// fs bhi object hai

// koi bhi nya sikhna ho to CRUD aana chahie
                                         // CRUD  - > CREATE READ UPDATE DELETE
                                           // fs na ye sb provide krta hai


let path =require("path") 

// let filePath=path.join(__dirname,"file.txt")
// console.log(filePath)

// // file create hui ?? NHI 


// fs.writeFileSync(filePath,"Helloo I am a text file") // (file ka path, file m jo content likhna hai)     //C -> CREATE
// // create hogi file ?? YES  content bhi aagya file m

// fs.writeFileSync(filePath,"Again writing on exsisting file") // override krdega content


// /* it creates file if it does not exists else it override */




// let content=fs.readFileSync(filePath,'utf-8') 
// // utf format btaya hai taki numbers m na aye[buffer form m na aaye]   // readable form  // file ko read krna
// // ya vhi console.log(content+"") krdo 
// console.log(content)                              // R - > READ


// fs.appendFileSync(filePath,"Newly added content")   // U - > UPDATE
// // append kya krta hai uske aage jake add krta hai


// fs.appendFileSync(filePath,"\nNewly added content") // new m add krne k liye \n lgado


// //    fs.unlinkSync(filePath) //             D - > DELETE
// /* YE HMNE KAAM FILE K LIYE KIYA HAI AB FOLDER K LIYE KRO .................................................................................*/




// create directory/folder , delete folder, read folder
//if(// does not exists)
//fs.mkdirSync("hmariDirectory")  
// directory bn gyi
/*kha bna hai? jisme hmari ye file hai*/

/*agr nhi hogi to bna di 
agr hai to code ftt gya ki hmara folder phle se hi hai [error aagya] to condition lgado if vli.................
                                                                                 file already exists, mkdir 'hmariDirectory'*/




                                                                                
/* google kro how to check if a directory exists  */
/*if(!fs.existsSync("hmariDirectory"))
fs.mkdirSync("hmariDirectory");
                                                    /* agr nhi bni hogi to bn jayegi agr bni hogi to error nhi ayega */




// READ A DIRECTORY 

/*let folderPath="E:\\Node Module\\module";
let contentOfFolder=fs.readdirSync(folderPath);
console.log(contentOfFolder);

/* array return krta hai ye ki is folder m kya kya hai */

// agr error aata hai to slash ko double krdo ....................kyu?? kyuki path ache se copy nhi ho pata 




// DELETE A DIRECTORY
//fs.unlinkSync("hmariDirectory") // isse delete nhi hui mtlb directory pr ye nhi chlega


//fs.rmdirSync("hmariDirectory") // delete hogya


/* ye empty directory k liye to work kr rha hai */

// but agr usme file hai to ye work ni kr rha


                                                                                                         // REMOVE A NON-EMPTY DIRECTORY
// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


// COPY FILE

let sourcePath= path.join(__dirname,"copyFileText.txt")

/* muje source path  btana hai file kha pr hai ye btana hai pura ka pura 
agr ye same folder m hai to __dirname se aagya vo folder tk ka path 
use baad file ka naam join krdiya */

let destinationPath= path.join(__dirname,"module","copyFileText.txt")
console.log(sourcePath)
console.log(destinationPath)



fs.copyFileSync(sourcePath,destinationPath) // dekho  copyFileText.txt vli file module m copy hogyi

