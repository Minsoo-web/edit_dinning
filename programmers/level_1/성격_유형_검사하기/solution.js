function solution(survey, choices) {
  const obj = {
    RT: {
      T: 0,
      R: 0
    },
    CF: {
      C: 0,
      F: 0
    },
    JM: {
      M: 0,
      J: 0
    },
    AN: {
      A: 0,
      N: 0
    }
  };

  survey.forEach((item, index) => {
    const choice = choices[index];

    if (choice === 4) {
      return;
    }

    let flip = false;

    if (obj[item[1] + item[0]]) {
      item = item[1] + item[0];
      flip = true;
    }

    obj[item] = {
      ...obj[item]
    };

    let winner = null;

    if (choice < 4) {
      winner = flip ? item[1] : item[0];
    } else {
      winner = flip ? item[0] : item[1];
    }

    const point = Math.abs(choice - 4);

    if (winner === item[0]) {
      obj[item][item[0]] += point;
    } else {
      obj[item][item[1]] += point;
    }
  });

  let answer = "";

  for (const property in obj) {
    const value = obj[property];
    const first = property[0]; // A
    const second = property[1]; // N

    if (value[first] === value[second]) {
      answer += second;
    } else {
      answer += value[first] > value[second] ? first : second;
    }
  }

  return answer;
}
