function solution(survey, choices) {
  // 미리 알파벳 순으로 정렬해둔 뒤
  const types = ["RT", "CF", "JM", "AN"];
  const MBTI = {};

  types.forEach(item => {
    MBTI[item[0]] = 0;
    MBTI[item[1]] = 0;
  });

  choices.forEach((choice, index) => {
    const point = Math.abs(choice - 4);
    const [disagree, agree] = survey[index]; // 앞에 꺼가 비동의, 뒤에꺼가 동의로 구조분해

    // A:
    MBTI[choice > 4 ? agree : disagree] += point;
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}

const answer = solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);

console.log(answer === "TCMA");
