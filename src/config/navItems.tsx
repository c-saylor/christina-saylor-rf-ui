import React from 'react';
import Attendees from '../pages/Attendees';
import Placeholder from '../pages/Placeholder';

// Single source of truth for the sidebar nav and the app's routes.
export type NavItem = {
  path: string;
  label: string;
  /** Page to render. Sections with `children` have no page of their own and redirect to their first child. */
  component?: React.ReactNode;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { path: '/guide', label: 'Guide', component: <Placeholder title="Guide" /> },
  {
    path: '/attendees',
    label: 'Attendees',
    children: [
      { path: '/attendees/attendees', label: 'Attendees', component: <Attendees /> },
      {
        path: '/attendees/types',
        label: 'Attendee Types',
        component: <Placeholder title="Attendee Types" />,
      },
      {
        path: '/attendees/packages',
        label: 'Packages',
        component: <Placeholder title="Packages" />,
      },
      {
        path: '/attendees/regcodes',
        label: 'Reg codes',
        component: <Placeholder title="Reg codes" />,
      },
      {
        path: '/attendees/discounts',
        label: 'Discounts',
        component: <Placeholder title="Discounts" />,
      },
    ],
  },
  { path: '/content', label: 'Content', component: <Placeholder title="Content" /> },
  { path: '/exhibitors', label: 'Exhibitors', component: <Placeholder title="Exhibitors" /> },
];

// Page shown at "/" and for unknown URLs.
export const defaultPath = '/attendees/attendees';
