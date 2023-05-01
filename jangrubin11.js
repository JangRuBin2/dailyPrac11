example = [[1,2,3], [4,[5,6]],7, [8,9]];
// console.log(typeof example);
function flatten(data) {
  let output = [];
  console.log(typeof(example[3]))
  for (let item in data) {
    // object 형태면 output에 분해 된 아이템을 넣는 건가?
    // ? 다차원 배열을 일차원 배열로 만드는게 flatten?
    // ! 배열 길이만큼 실행
    // item이 배열 형태면 벗겨내서 example을 일차원 배열로 만드는게 목표
    if (typeof(item) == "object") {
      // ?? 배열을 
      // let test = data.falt();
      // let test = Object.values(data)
      // let test = data.slice(0,4)
      
      console.log(test)
    }
  }     
};
console.log(flatten(example));