let str1= "abcdefghijklmnopqrstuvxyz";
let str2= "abcdefghijklmnopqrstuvxyz"; 

var checkpermutation = function(){

if(str1.length !== str2.length) {
    return false;
  }
  
  let hasTable = [];

  for(let i =0;i<str1.length;i++){

    if(!hasTable[str1[i]]){

      hasTable[str1[i]]= 1
    }
    else{
      hasTable[str1[i]]++
    }
  }
  console.log(hasTable)

  for(let i = 0;i< str2.length;i++){

    if(hasTable[str2[i]]){

      hasTable[str2[i]]--
    }
    
  }
 
  
for(i in hasTable) {
    if(hasTable[i] !== 0) {
      return false;
    }
  }

return true;
}
checkpermutation(str1,str2)
