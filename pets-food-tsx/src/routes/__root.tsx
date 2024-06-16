import {
  Link,
  Outlet,
  createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Navbar } from '../components/Navbar';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      {/* <div className='flex gap-2 p-2'>
        <Link
          to='/'
          className='[&.active]:font-bold'
        >
          Home
        </Link>{' '}
        <Link
          to='/about'
          className='[&.active]:font-bold'
        >
          About
        </Link>
      </div>
      <hr /> */}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
