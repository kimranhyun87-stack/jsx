import React from 'react';

function Cal(props) {
  // 1. 보따리에서 점수를 하나씩 꺼내서 이름표를 붙여준다.
  const s1 = props.score[0];
  const s2 = props.score[1];
  const s3 = props.score[2];
  // 2. 꺼낸 점수들로 총점과 평균을 계산한다. (이것이 자식의 역할!)
  const total = s1 + s2 + s3;
  const average = total / 3;

  return (
    <>
      <h2>성적표</h2>
      <p>국어: {s1}점</p>
      <p>수학: {s2}점</p>
      <p>영어: {s3}점</p>
      <hr />
      <p>
        <strong>총점: {total}</strong>
      </p>
      <p>
        <strong>평균: {average}</strong>
      </p>
    </>
  );
}

export default Cal;
