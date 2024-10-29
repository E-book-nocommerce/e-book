import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routesConfig, RouteConfig } from './config/routesConfig.ts';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/errors/NotFound.tsx';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((route: RouteConfig, index) => {
          const RouteLayout = route.layout || Layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <RouteLayout>
                  <route.component />
                </RouteLayout>
              }
            />
          );
        })}

        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
