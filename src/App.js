import './App.css';
import Header from './page/Header';
import Home from './page/Home';
import About from './page/About';
import Man_1 from './page/Man_1';
import Man_2 from './page/Man_2';
import Man_3 from './page/Man_3';
import Man_4 from './page/Man_4';
import FAQ_pat from './page/FAQ_pat';
import Last_pat from './page/Last_pat';
import Services from './page/Services';
import CTA from './page/CTA';
import Case_study from './page/Case_study';
import Blogs from './page/Blogs';
import Texts_pat from './page/Texts_pat';
import Blog_1 from './page/Blog_1';
import Blog_2 from './page/Blog_2';
import Blog_3 from './page/Blog_3';
import Blog_4 from './page/Blog_4';
import Blog_5 from './page/Blog_5';
import Blog_6 from './page/Blog_6';
import Team from './page/Team';


import { BrowserRouter, Routes, Route } from "react-router";



function App() {
  return (
  <BrowserRouter>
  {/* <Header/> */}
  {/* <CaseStudy/> */}
  <Routes>
    
     <Route path='/' element={<Home/>} ></Route>
     <Route path='/Header/' element={<Header/>}></Route>
     <Route path='/About' element={<About/>}></Route>
     <Route path='/Man_1' element={<Man_1/>}></Route>
     <Route path='/Man_2' element={<Man_2/>}></Route>
     <Route path='/Man_3' element={<Man_3/>}></Route>
     <Route path='/Man_4' element={<Man_4/>}></Route>
     <Route path='/FAQ_pat' element={<FAQ_pat/>}></Route>
     <Route path='/Last_pat' element={<Last_pat/>}></Route>
     <Route path='/Last_pat' element={<Last_pat/>}></Route>
     <Route path='/Services' element={<Services/>}></Route>
     <Route path='/CTA' element={<CTA/>}></Route>
     <Route path='/Blogs' element={<Blogs/>}></Route>
     <Route path='/Case_study' element={<Case_study/>}></Route>
     <Route path='/Texts_pat' element={<Texts_pat/>}></Route>
     <Route path='/Blog_1' element={<Blog_1/>}></Route>
     <Route path='/Blog_2' element={<Blog_2/>}></Route>
     <Route path='/Blog_3' element={<Blog_3/>}></Route>
     <Route path='/Blog_4' element={<Blog_4/>}></Route>
     <Route path='/Blog_5' element={<Blog_5/>}></Route>
     <Route path='/Blog_6' element={<Blog_6/>}></Route>
     <Route path='/Team' element={<Team/>}></Route>
    




    




     

  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
