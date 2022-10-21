const participantNums = [[1, 3, 2, 2, 1],
[3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21],
[9, 1, 8, 7, 71, 33, 62, 35, 11, 4, 7, 71, 33, 8, 9, 1, 4, 11, 35]
]

  // 3
  // 100
  // 62
  ^^ 아나 집에서 다시 풀어보자 ^^ 화이팅 ^^^^^^^^^
    // function dduki(array) {
    //   for (let i = 0; i < 3; i++) {
    //     let n = array[i].length
    //     for (let j = n - 1; j > 0; j--) {
    //       let tmp = array[i][j]
    //       array[i].pop()
    //       console.log('i:' + i, 'j:' + j)
    //       console.log(array[i])
    //       let ans = array[i].indexOf(tmp)
    //       console.log(tmp, ans)
    //       if (ans === -1) {
    //         console.log(tmp)
    //       } else {
    //         array[i]
    //       }
    //     }
    //   }
    // }
    function dduki(arr) {
      let n = dduki.length
      let count = 0
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < n; j++) {
          if (arr[i][j])
    }
      }
    }

dduki(participantNums)