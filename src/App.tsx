import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import NoticePage from './pages/NoticePage';
import SearchPage from './pages/SearchPage';
import NewReviewPage from './pages/NewReviewPage';
import WellPage from './pages/WellPage';
import MyPage from './pages/MyPage';
import MainLayout from './components/layout/MainLayout';
import DefaultLayout from './components/layout/DefaultLayout';

function App() {
  /* ----- vh 구하는 함수 (for mobile) ----- */
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize); // resize 이벤트 감지
    return () => {
      window.removeEventListener('resize', setScreenSize); // 컴포넌트가 언마운트될 때 정리
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Routes>
        {/* header, nav 포함 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/newreview' element={<NewReviewPage />} />
          <Route path='/well' element={<WellPage />} />
          <Route path='/profile' element={<MyPage />} />
        </Route>
        {/* header, nav 미포함 레이아웃 */}
        <Route element={<DefaultLayout />}>
          <Route path='/notice' element={<NoticePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
