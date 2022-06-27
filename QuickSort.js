let arr = [10, 80, 30, 90, 40, 50, 70]

console.log(arr, " 1st");

QuickSort(arr, 0, arr.length - 1)

function QuickSort(arr, low, high){
    if (low < high){
        let pi = Pivot(arr, low, high)
        QuickSort(arr, low, pi - 1)
        QuickSort(arr, pi +1 , high)
    }
}

function Pivot(arr, low, high){
    let pivot = arr[high]
    let i = low - 1;
    let j ;
     for (j = low; j < high; j++){
        if (arr[j] < pivot){
            i++;
            swap(arr, i, j)
        }
     }
     swap(arr, i+ 1, j)
     return i + 1
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
}

console.log(arr, " 2nd")