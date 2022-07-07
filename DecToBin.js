let input = 7;

let ot = 111;

answer(input)

function answer(n ){
    let newarr = new Array(32);
    let i = 0;
    while ( n > 0){
        newarr[i] = n % 2;
        n = Math.floor(n/2)
        i++
    }

    let final = []

    for (let j = i - 1; j >= 0; j--){
        final.push(newarr[j])
    }
    console.log(final.join(""))
}