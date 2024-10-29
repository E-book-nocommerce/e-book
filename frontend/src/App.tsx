import AppRoutes from './AppRouters.tsx';
import { BookServiceProvider } from './context/UserServiceContext.tsx';

function App() {
  return (
    <BookServiceProvider>
      <AppRoutes></AppRoutes>
    </BookServiceProvider>
  );
}

export default App;
