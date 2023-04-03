import React from 'react';
// import { Route } from 'react-router-dom';  // react-router-dom 5버전
import { Route, Routes, Link  } from "react-router-dom";  //  react-router-dom 6버전 , package.json에 설치한 라우터돔버전확인. 6버전이라서 App.js 에 임포트와, 라우트태그코드만 버전에 맞게 작성
import About from './About';
import Home from './Home';
import Profile from './Profile';


// App.js 파일에서만 수정: 주석처리한 5버전 코드를 6버전으로 바꾸니 브라우저 화면에 잘 렌더링되었다. 
const App = () => {
  return (
    // react-router-dom 5버전
      // <div>
      //   <Route path="/" component={Home} />
      //   <Route path="/about" component={About} />
      // </div>s

  <div>
    {/* 2. a태그와 Link 비교 : 새로고침 유무 */}
    {/* <hr />
      <a href ="/about"> 이동</a> */}
    <hr />
      <ul>
        <li>
          <Link to="/">메인홈</Link>
        </li>
        <li>
          <Link to="/about">사이트 소개</Link>
        </li>
      </ul>
      <hr />

{/* 1. <Routes>를 활용하여 url 경로와 렌더링해줄 컴포넌트를 연결한다.  */}
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
 </div>
  );
};

export default App;