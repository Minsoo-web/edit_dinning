function solution(today, terms, privacies) {
  const result = [];
  const [year, month, day] = today.split(".").map(Number);
  const todayDates = year * 28 * 12 + month * 28 + day;

  const termObj = {};
  terms.forEach(term => {
    const [type, month] = term.split(" ");
    termObj[type] = Number(month);
  });

  privacies.map((privacy, index) => {
    const [date, term] = privacy.split(" ");
    const [year, month, day] = date.split(".").map(Number);
    const expirationDate = year * 28 * 12 + month * 28 + termObj[term] * 28 + day;

    if (todayDates >= expirationDate) result.push(index + 1);
  });

  return result;
}
