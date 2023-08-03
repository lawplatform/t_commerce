import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const queryClient = new QueryClient();
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
]);
<RouterProvider router={router} />
ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</QueryClientProvider>
)
