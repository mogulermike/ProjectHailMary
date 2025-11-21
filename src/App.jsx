import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CrewPage from './pages/CrewPage';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const iconRef = useRef(null);
  const panelRef = useRef(null);

  // Close when clicking outside icon + panel
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e) {
      const iconEl = iconRef.current;
      const panelEl = panelRef.current;
      if (
        iconEl &&
        !iconEl.contains(e.target) &&
        panelEl &&
        !panelEl.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const closePanel = () => setIsOpen(false);

  return (
    <div className='app'>
      {/* Header icon in upper right */}
      <header className='app-header'>
        <button
          type='button'
          ref={iconRef}
          className={`app-header-icon ${isOpen ? 'app-header-icon--open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src='/rocket.svg' alt='Navigation' />
        </button>

        <aside
          ref={panelRef}
          className={`nav-panel ${isOpen ? 'nav-panel--open' : ''}`}
          aria-hidden={!isOpen}
        >
          <nav>
            <ul className='nav-list'>
              <li>
                <Link to='/' onClick={closePanel}>
                  Countdown
                </Link>
              </li>
              <li>
                <Link to='/crew' onClick={closePanel}>
                  Meet The Crew
                </Link>
              </li>
              {/* Add these back later when you have pages */}
              {/* <li>
                <Link to="/timeline" onClick={closePanel}>
                  Timeline
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closePanel}>
                  About
                </Link>
              </li> */}
            </ul>
          </nav>
        </aside>
      </header>

      {/* Page content */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/crew' element={<CrewPage />} />
      </Routes>
    </div>
  );
}
