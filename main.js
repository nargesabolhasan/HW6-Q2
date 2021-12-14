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


