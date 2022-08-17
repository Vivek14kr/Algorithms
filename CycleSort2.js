function cyclesort(arr) {
    let i = 0;
    while (i < arr.length){
        let correct = arr[i] - 1;

        if (arr[i] !== arr[correct]){
            swap(arr, i, correct);
        }else {
            i++;
        }
    }
}