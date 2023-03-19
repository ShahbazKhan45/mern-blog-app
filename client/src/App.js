import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import NotFound from './pages/NotFound';
import Form from './components/Form';
// components
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className='max-w-screen-md mx-auto pt-20'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/articlesList" element={<ArticlesList />} />
            <Route exact path="/article/:name" element={<Article />} />
            <Route exact path="/article/:name/add-comment" element={<Form />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
