function solution(t, p) {
  const length = p.length;

  let acc = 0;
  const arr = [];
  while (acc + length <= t.length) {
    arr.push(t.substring(acc, acc + length));
    acc++;
  }

  return arr.filter(item => item <= p).length;
}

const answer = solution("10203", "15");
console.log(answer === 3);
