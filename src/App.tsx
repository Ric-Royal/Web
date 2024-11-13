import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitions.css'; // Create a CSS file for transitions

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Resume = lazy(() => import('./pages/Resume'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
        <ErrorBoundary>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

export default App; 