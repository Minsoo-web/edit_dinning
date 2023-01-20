function solution(today, terms, privacies) {
  const makeObj = stringArr => {
    const obj = {};
    stringArr.forEach(str => {
      const foo = str.split(" ");

      obj[foo[0]] = foo[1];
    });
    return obj;
  };

  const add0 = day => {
    if (day < 10) {
      return `0${day}`;
    }
    return day;
  };

  const splitDate = date => {
    const foo = date.split(".");
    return {
      year: parseInt(foo[0]),
      month: parseInt(foo[1]),
      day: parseInt(foo[2])
    };
  };

  const minusOneDay = date => {
    let { year, month, day } = splitDate(date);

    day -= 1;

    if (day === 0) {
      month -= 1;
      day = 28;

      if (month === 0) {
        year -= 1;
        month = 12;
      }
    }

    return `${year}.${add0(month)}.${add0(day)}`;
  };

  const addDate = (date, addMonth) => {
    let { year, month, day } = splitDate(date);

    const addYear = Math.floor(addMonth / 12);
    const _addMonth = addMonth % 12;

    year += addYear;
    month += _addMonth;

    if (month > 12) {
      year += 1;
      month -= 12;
    }

    return `${year}.${add0(month)}.${add0(day)}`;
  };

  const termObj = makeObj(terms);

  const result = privacies.map((item, index) => {
    const _0Date_1Term = item.split(" ");
    const addedDay = termObj[_0Date_1Term[1]];

    const addedDate = minusOneDay(addDate(_0Date_1Term[0], addedDay));

    console.log(addedDate);

    if (today > addedDate) return index + 1;
  });

  return result.filter(item => item);
}
