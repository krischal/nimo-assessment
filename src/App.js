import logo from './logo.svg';
import './App.css';
import HomeScreen from './pages/Home/home';
import LoginScreen from './pages/Home/Login/login';
import Page404 from './pages/404/404';
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeScreen/>,
  },
  {
    path: "/login",
    element:<LoginScreen/>,
  },
  {
    path: "*",
    element:<Page404/>,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>

  );
}

export default App;
