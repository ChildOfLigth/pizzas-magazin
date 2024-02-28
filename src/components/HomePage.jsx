import { Outlet } from 'react-router-dom';
import HeaderWebsite from './HeaderWebsite';
import PizzaList from './PizzaList';

function HomePage() {
  return (
    <>
    <HeaderWebsite />
    <PizzaList />
    <Outlet />
    </>
  );
}

export default HomePage;