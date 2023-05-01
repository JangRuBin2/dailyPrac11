example = [[1,2,3], [4,[5,6]],7, [8,9]];
// console.log(typeof example);
function flatten(data) {
  let output = [];
  for (let item in data) {
    // object 형태면 output에 분해 된 아이템을 넣는 건가?
    // ? 다차원 배열을 일차원 배열로 만드는게 flatten?
    // ! 배열 길이만큼 나옴
    if (typeof(data) == "object") {
      // output += 
    }
    // console.log("s");
  }     
};
console.log(flatten(example));