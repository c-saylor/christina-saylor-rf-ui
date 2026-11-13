import { createContext, useContext } from 'react';


type SidebarContextValue = {
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
};

export const SIDEBAR_ID = 'app-sidebar';

export const SidebarContext = createContext<SidebarContextValue>({
  isOpen: false,
  close: () => {},
  toggle: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export function SidebarToggle() {
  const { isOpen, toggle } = useSidebar();
  return (
    <button
      type="button"
      className="Sidebar-toggle"
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      aria-expanded={isOpen}
      aria-controls={SIDEBAR_ID}
      onClick={toggle}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
