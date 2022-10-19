// 1번
const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// 최초 정의한 i를 재할당하면서 사용하기 때문에 const 를 사용하면 에러가 난다.
// 재할당이 가능한 let 을 사용해야한다.
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}



// 2번
for (num in nums) {
    console.log(nums[num], typeof nums[num])
}

// for .. in 문은 객체를 순회하기 때문에 key 값을 반환한다.