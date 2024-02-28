import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import PizzaPage from './components/PizzaPage';
import './App.css';

const route_site = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/:keyProduct" element={<PizzaPage />} />
    </>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={route_site} />
    </div>
  );
}

export default App;
