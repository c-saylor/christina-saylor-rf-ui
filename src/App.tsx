import React, { useEffect, useMemo, useRef, useState } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import { SIDEBAR_ID, SidebarContext, SidebarToggle } from './components/SidebarContext';
import logo from './assets/images/logo.svg';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { navItems, defaultPath } from './config/navItems';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  const sidebar = useMemo(
    () => ({
      isOpen: sidebarOpen,
      close: () => setSidebarOpen(false),
      toggle: () => setSidebarOpen((o) => !o),
    }),
    [sidebarOpen],
  );

  // Close the overlay after navigating to a page.
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // While the overlay is open: move focus into it, keep Tab inside it, close on Escape,
  // and return focus to whatever opened it (the menu button) once it closes.
  useEffect(() => {
    const panel = sidebarRef.current;
    if (!sidebarOpen || !panel) return;

    const opener = document.activeElement as HTMLElement | null;
    const focusables = () =>
      Array.from(panel.querySelectorAll<HTMLElement>('a[href], button, input, [tabindex="0"]'));
    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      opener?.focus();
    };
  }, [sidebarOpen]);

  return (
    <SidebarContext.Provider value={sidebar}>
      <div className="App">
        <header
          ref={sidebarRef}
          id={SIDEBAR_ID}
          className={sidebarOpen ? 'App-header is-open' : 'App-header'}
        >
          <Sidebar />
        </header>
        <div
          className={sidebarOpen ? 'Sidebar-backdrop is-open' : 'Sidebar-backdrop'}
          onClick={sidebar.close}
          aria-hidden="true"
        />
        <div className="Mobile-topbar">
          <img src={logo} className="Mobile-topbar-logo" alt="RainFocus" />
          <SidebarToggle />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to={defaultPath} replace />} />
            {navItems.map((item) =>
              item.children?.length ? (
                // Sections with sub-pages have no page of their own; send them to the first sub-page.
                <React.Fragment key={item.path}>
                  <Route
                    path={item.path}
                    element={<Navigate to={item.children[0].path} replace />}
                  />
                  {item.children.map((child) => (
                    <Route key={child.path} path={child.path} element={child.component} />
                  ))}
                </React.Fragment>
              ) : (
                <Route key={item.path} path={item.path} element={item.component} />
              ),
            )}
            <Route path="*" element={<Navigate to={defaultPath} replace />} />
          </Routes>
        </main>
      </div>
    </SidebarContext.Provider>
  );
}

export default App;
