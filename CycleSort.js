let arr = [4,6,5,1,3,2];

console.log(CycleSort(arr));

function CycleSort(arr){
  


    for (let i = 0; i < arr.length; i++){
        let swapindex = arr[i] - 1;

        let temp = arr[i];
        arr[i] = arr[swapindex];
        arr[swapindex] = temp;

    }
    return arr
}