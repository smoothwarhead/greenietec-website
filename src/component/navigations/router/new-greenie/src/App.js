
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';

import Home from './pages/home/Home';
// import { useEffect } from 'react';



function App() {

  // const { pathname } = useLocation();
	// useEffect(() => {
	// 	window.scrollTo({ top: 0, behavior: "auto" });
	// }, [pathname]);



  return (
   <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    
   </Layout>


  );
}

export default App;
