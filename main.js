let tree=[]
let nums=[]
function myfun (array){
    for(let index in array){
        if (array[index]===-1){
           tree[index]=array[index]
            nums[index]=""
        }else{
           tree[index]=""
            nums[index]=array[index]
        }
    }
    Sorting(nums)
    console.log(tree)
}

function Sorting(array2) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array2.length; i += 1) {
        if(array2[i - 1]===-1){
         arr[i]=array2[i-1]
        }else if (array2[i - 1] > array2[i]) {
          done = false;
          var tmp = array2[i - 1];
          array2[i - 1] = array2[i];
          array2[i] = tmp;
        }
    }
}
for(let k=0; k<array2.length;k++){
   if( array2[k]===""){
       array2.splice(k,1)
   }
   for(let j in tree){
    if ( tree[j] ==="") {
        tree[j]=array2[k]
        break
  }
   }
}
}
   myfun ([-1, 150, 190, 170, -1, -1, 160, 180])
   myfun([-1,10,60,5,2,-1,7,-1,-1,6])




