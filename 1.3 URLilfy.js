Solution 1:-

let str1= "Mr John Smith      "

var urilfy = function(str1){


let len = str1.trim().length
 str1= str1.trim().split("");
 //console.log(len)
 
for(let i=0;i<len;i++){

  if(str1[i]==' '){

    str1[i] ='%20'
  }
}
 
 return str1.join("");



}

urilfy(str1)
// OUTPUT :- 'Mr%20John%20Smith'
