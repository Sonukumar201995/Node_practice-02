let os=require("os");
let fs=require("fs");
const { error } = require("console");

let user=os.userInfo();
console.log(user);

fs.appendFile("file.txt", user.username  ,(error)=>{
   if(error)
   {
    console.log(error);
    return;
   }else
   {
    console.log("file is creating")
   }
})

// fs.unlink("file.txt",(error)=>{
//     if(error)
//     {
//         console.log(error);
//         return;
//     }else
//     {
//         console.log("file is deleting")
//     }
// })

// fs.rename("file.txt","creating.txt", (error)=>{
//     if(error)
//     {
//         console.log(error);
//         return;
//     }else
//     {
//         console.log("file name is rename ")
//     }
// })

// Write file
// fs.writeFile("file.txt","wecome to node js modules", (error)=>{
//     if(error)
//     {
//         console.log(error)
//     }
//     else
//     {
//         console.log("file is write")
//     }
// })

// Read file
fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});