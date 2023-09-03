import logo from './logo.svg';
import './App.css';
import LoginScreen from './pages/Login/Login';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeScreen from './pages/Home/Home';
import Page404 from './pages/404/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GlobalContext';
import BottomAlert from './components/Common/BottomAlert';
import NavBar from './components/NavBar/NavBar';
import ConfirmationDialog from './components/Common/ConfirmationDialog';
const queryClient = new QueryClient();

const App =()=> {
  
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<NavBar><HomeScreen /></NavBar>} />
        <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
      </div>
      <BottomAlert />
      <ConfirmationDialog />
      </GlobalContextProvider>
    </QueryClientProvider>

  );
}

export default App;
