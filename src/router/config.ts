import Index from '@/pages/Index';
import Dashboard from '@/pages/dashboard/Index';
import { RouteConfig } from '@/types/common';

export const routes: RouteConfig[] = [
	{
		path: '/',
		component: Index,
		children: [
			{
				path: '/dashboard',
				component: Dashboard,
			},
		],
	},
];
