"use client";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ArticlesHome from "./articles";
import Article from "./article";
import { useEffect } from 'react';

const Articles = () => {
  return (
    <Router>
      <Routes>
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/articles" element={<ArticlesHome />} />
      </Routes>
    </Router>
  );
};
export default Articles;
