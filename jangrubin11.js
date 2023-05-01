example = [[1,2,3], [4,[5,6]],7, [8,9]];
console.log(typeof example[0]);
function flatten(data) {
  let output = [];
  // console.log(typeof(example[0]))
// console.log(example.join())
  for (let item in data) {
    // object 형태면 output에 분해 된 아이템을 넣는 건가?
    // ? 다차원 배열을 일차원 배열로 만드는게 flatten?
    // ! 배열 길이만큼 실행
    // item이 배열 형태면 벗겨내서 example을 일차원 배열로 만드는게 목표
    if (Array.isArray(item)) {
      // let test = data.falt();
      // flattenObject = item.join();
      // output.push(flattenObject) ;
      // output += flattenObject;
      // let test = Object.values(data)
      // let test = data.slice(0,4)
      console.log("test")

    } else {
      // 배열이나 object가 아니면 바로 push함
      output.push(item);
    }
  } return output;
};
console.log(flatten(example));