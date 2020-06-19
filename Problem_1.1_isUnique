
let str = "abcedefhia"


function everyCharUnique(str) {

  let hasht = new Map();
   str = str.split("");

 for(let i = 0; i< str.length; i++){
          
          if(hasht[str[i]] != undefined ){
            
            hasht[str[i]] = i
          }else{
              
             return false
          }
       }
 
 return true;
}

everyCharUnique(str);

Time Complexity :-O(n)
Space Complexity :-O(n)

-------------------------------------------------------------------------------------------
with no additional datastructure required
function everyCharUnique(str) {
   str = str.split("");

 for(let i = 0; i< str.length; i++){
          
          for(let j = i+1 ;j< str.length ;j++){
          
          if(str[i] == str[j]){
          
          return false
          
       }
 
 return true;
}

everyCharUnique(str);

Time Complexity :-O(n * n)
Space Complexity :-




