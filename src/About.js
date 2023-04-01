// import React from 'react';

// const About = () => {
//   return (
//     <div>
//       <h1> About  </h1>
//       <p> 이 사이트는 리액트 라우터를  실습 해보는 예제 프로젝트를 다룹니다</p>
//     </div>
//   );
// };

// export default About;



// // 쿼리 예제 
// // 아래 코드적용후, http://localhost:3000/about?detail=true&mode=1  주소에입력하면
// // <p>쿼리스트링: {location.search}</p> 코드의 {location.search} 에 ?detail=true&mode=1 가 출력됨

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const About = () => {
//   const location = useLocation();

//   return (
//     <div>
//       <h1> About  </h1>
//       <p> 이 사이트는 리액트 라우터를  실습 해보는 예제 프로젝트를 다룹니다</p>
//       <p>쿼리스트링: {location.search}</p>
//     </div>
//   );
// };

// export default About;



// ? 물음표를 지우고, & 문자열로 분리한뒤 key 와 value 를 파싱하는 작업을
// 리액트라우터v6부터 useSearchParams 라는 Hook을 통해 가능해졌다
// 쿼리 예제2 - 물음표 지우고 파싱하기

import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;