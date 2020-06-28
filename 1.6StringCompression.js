let arr ="aabcccccaaa";


var cmpresdstr = function(arr) {

  let str ="";
   count =1;
  for(let i=0;i< arr.length;i++){

    if(arr[i]== arr[i+1]){
     
     count++;
    }else{
      str += arr[i]+count
      count=1
    }
  }
  return str
    
};

cmpresdstr(arr)
