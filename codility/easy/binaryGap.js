function solution(N) {
  let oneArr = [];
  let answer = 0;
  const foo = parseInt(N, 10).toString(2);
  foo.split("").forEach((numberChar, index) => {
    if (numberChar === "1") {
      oneArr.push(index);
      if (oneArr.length === 2) {
        const count = oneArr[1] - oneArr[0] - 1;
        oneArr.shift();
        if (count > answer) {
          answer = count;
        }
      }
    }
  });
  return answer;
}

// 다른 사람 풀이
// 출처 - https://im-developer.tistory.com/178
function solution_2(N) {
  const binaryNum = N.toString(2);
  const binaryGaps = binaryNum.slice(binaryNum.indexOf("1") + 1, binaryNum.lastIndexOf("1"));
  const zeroCounted = binaryGaps.split("1").map(zeros => zeros.length);

  return zeroCounted.length ? Math.max(...zeroCounted) : 0;
}
