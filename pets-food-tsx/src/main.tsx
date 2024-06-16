import React from 'react';
import reactDom from 'react-dom/client';
// import { App } from './App.tsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
  RouterProvider,
  createRouter,
} from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = document.getElementById('root');

if (root) {
  reactDom.createRoot(root).render(
    <React.StrictMode>
      <ChakraProvider>
        {/* <App /> */}
        <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>,
  );
}
