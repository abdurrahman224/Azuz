import { Provider } from 'react-redux';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { store } from './features/store/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
