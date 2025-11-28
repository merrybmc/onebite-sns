function solution(my_string) {
  let newStrArray = my_string.split(""); // 문자열을 ''로 각각 분리 ( 배열로 ) -> 숫자는 == 연산자로 추려내기
  let resultArray = [];

  for (i = 0; i < newStrArray.length; i++) {
    if (newStrArray[i] == Number(newStrArray[i])) {
      resultArray.push(Number(newStrArray[i]));
    }
  }
  resultArray.sort((a, b) => a - b);
  return resultArray;
}

console.log(solution("hi12392"));

// typeof
// string 값만 골라내서 없애기
// 숫자 오름차순 해서 리스트로 반환
