import * as React from 'react';
import Layout from '../components/layout/Layout.tsx';
import Index from '../components/pages/Index.tsx';
import BookDetail from '../components/pages/BookDetail.tsx';
import About from '../components/pages/About.tsx';
import BookList from '../components/pages/BookList.tsx';

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  layout?: React.ComponentType<{ children?: React.ReactNode }>;
}

export const routesConfig: RouteConfig[] = [
  {
    path: '/',
    component: Index,
    layout: Layout,
  },
  {
    path: '/books/:id',
    component: BookDetail,
    layout: Layout,
  },
  {
    path: '/about',
    component: About,
    layout: Layout,
  },
  {
    path: '/books',
    component: BookList,
    layout: Layout,
  },
];
