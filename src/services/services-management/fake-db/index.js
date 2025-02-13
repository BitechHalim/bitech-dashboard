import { BarChart3, Settings, Users } from 'lucide-react';

export const initialServices = [
  {
    id: '1',
    name: 'API Gateway',
    description:
      'Secure and manage API endpoints with rate limiting and authentication.',
    companies: [
      { name: 'TechCorp', status: 'active', clients: 156, apiCalls: 15678 },
      { name: 'CloudSys', status: 'active', clients: 89, apiCalls: 10000 },
    ],
  },
  {
    id: '2',
    name: 'Data Storage',
    description:
      'Scalable cloud storage solution with automatic backup and versioning.',
    companies: [
      { name: 'CloudSys', status: 'active', clients: 89, apiCalls: 12390 },
      { name: 'SecureNet', status: 'pending', clients: 45, apiCalls: 5000 },
    ],
  },
  {
    id: '3',
    name: 'Authentication',
    description: 'Multi-factor authentication and SSO integration service.',
    companies: [
      { name: 'SecureNet', status: 'pending', clients: 45, apiCalls: 8902 },
    ],
  },
];

export const metrics = [
  {
    icon: <Users />,
    title: 'Total Companies',
    value: '12',
    iconColor: 'text-blue-500',
  },
  {
    icon: <Settings />,
    title: 'Active Services',
    value: '245',
    iconColor: 'text-green-500',
  },
  {
    icon: <BarChart3 />,
    title: 'Total API Calls',
    value: '46,970',
    iconColor: 'text-purple-500',
  },
];

export const availableCompanies = [
  'TechCorp',
  'CloudSys',
  'SecureNet',
  'DataFlow',
  'NetSec',
];
