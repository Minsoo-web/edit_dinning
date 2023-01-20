function solution(s) {
  const obj = {};
  const answer = s.split("").map((char, index) => {
    if (obj[char]) {
      const returnValue = Math.abs(index - obj[char].index);

      obj[char] = {
        index,
        returnValue
      };

      return returnValue;
    }

    obj[char] = {
      index,
      returnValue: -1
    };
    return -1;
  });

  return answer;
}

const answer = solution("banana");
