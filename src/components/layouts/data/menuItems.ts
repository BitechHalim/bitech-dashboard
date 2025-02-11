import { BarChart, Home, Settings2, SquareTerminal } from 'lucide-react';

export const menuItems = [
  {
    title: 'Company Management',
    url: '/company-management',
    icon: Home,
    items: [
      { title: 'List', url: '/company-management' },
      { title: 'Add', url: '/company-management/add' },
    ],
  },
  {
    title: 'Service Management',
    url: '/service-management',
    icon: SquareTerminal,
    items: [
      { title: 'List', url: '/service-management' },
      { title: 'Add', url: '/service-management/add' },
    ],
  },
  {
    title: 'Client Management',
    url: '/client-management',
    icon: Settings2,
    items: [
      { title: 'List', url: '/client-management' },
      { title: 'Add', url: '/client-management/add' },
    ],
  },
  {
    title: 'Analytics and Reporting',
    url: '/analytics-reporting',
    icon: BarChart,
    items: [
      { title: 'Dashboard', url: '/analytics-reporting' },
      { title: 'Reports', url: '/analytics-reporting/reports' },
    ],
  },
];
