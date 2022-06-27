let n = 5;
let q = [[1 ,2], [1 ,3] ,[2], [1, 4], 2]


let st1 = []
let st2 = []
ans(n, q)


function ans(n, q){
  
    for (let i = 0; i < q.length; i++){
        if (q[i][0]== 1){
            enqueue(q[i][1])
        }else {
            console.log(dequeue())
        }
    }
}

function enqueue(e){
  st1.push(e)
}

function dequeue(){
    if (st2.length == 0){
        if (st1.length == 0){
        console.log("Empty")
        }
        while (st1.length > 0){
            let ele = st1.pop()
            st2.push(ele)
        }
    }
    return st2.pop()
}