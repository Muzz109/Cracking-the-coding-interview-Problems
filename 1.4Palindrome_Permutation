//Tact Coa
let str1= "tact coa"
let str2 = "atco cta"
//"taco cat"
//atco cta
var perm = function(str1,str2){

  let hastable = [];
  let count=0;

  for(let i =0;i< str1.length;i++){

    if(!hastable[str1[i]]){

      hastable[str1[i]] = 1
    }
    else{
      hastable[str1[i]]++
    }
  }
console.log(hastable)
 for(let i =0;i< str2.length;i++){

    if(hastable[str2[i]]){

      hastable[str2[i]]--
    }
   
  }

  for(let i in hastable){

    if(hastable[i]%2 == 1)

    count++

    if(count >1){

      return false
    }
  }
  console.log(hastable)

  return true;
}

perm(str1,str2)

// Another  approach is add charters to hashma and if the count is evn for the second time return false; 
---------------------------------------------
function palinPerm(s) {
  const sanitized = s.toUpperCase().split(" ").join("");

  console.log(sanitized)
  const freq = new Map();
  for (let i = 0; i < sanitized.length; i++) {
    const char = sanitized.charAt(i);
    const prevFreq = freq.get(char) || 0;
    freq.set(char, prevFreq + 1);
  }
  let oddCount = 0;
  for (let char of freq) {
    if (char[1] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount < 2;
}

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
