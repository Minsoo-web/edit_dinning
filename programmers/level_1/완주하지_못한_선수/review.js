function solution(participant, completion) {
  let obj = {};
  for (var p of participant) {
    if (!obj[p]) obj[p] = { same_name: 0, complete: false, name: p };
    else obj[p].same_name++;
  }

  for (var c of completion) {
    if (obj[c].same_name == 0) obj[c].complete = true;
    else obj[c].same_name--;
  }

  return Object.values(obj).filter(p => p.complete == false)[0].name;
}
