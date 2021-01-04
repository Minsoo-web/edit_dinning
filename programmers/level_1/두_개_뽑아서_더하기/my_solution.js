function solution(numbers) {
  const length = numbers.length;
  let obj = {};

  for (let i = 0; i < length; i++) {
    let last_number = numbers.pop();
    numbers.forEach(num => {
      let plus_number = num + last_number;
      if (!obj[plus_number]) obj[plus_number] = plus_number;
    });
  }

  return Object.values(obj);
}
