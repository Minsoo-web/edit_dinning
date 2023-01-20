function solution(s) {
  const obj = {};
  return s.split("").map((char, index) => {
    let result = obj[char] !== undefined ? index - obj[char] : -1;
    obj[char] = index;

    return result;
  });
}

const answer = solution("banana");
