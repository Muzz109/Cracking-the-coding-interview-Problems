let str1 = "pale";
let str2 = "bale";

 var oneAway = function (str1,str2){
    
    str1 = str1.split('');
    str2 = str2.split('');
    let i =0;
    let j=0;
    let falsepointer = false

while(i < str1.length)
 {
    if(str1[i] != str2[j]){
    i++;
    j++;
    if(falsepointer){
       
       return false ;
    }else{

      falsepointer = true
    }
  }else{
    i++
    j++

  }
 }
  return true;
 }

oneAway(str1,str2)
