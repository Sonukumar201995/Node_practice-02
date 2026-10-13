function hello()
{
    console.log("hello world")
}

let greet=(a,b,hello)=>{
  let result=a+b;
  console.log(result);
  hello();
}

greet(10,20,hello);