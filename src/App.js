import './App.css';
import React,{ useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus:false
      }
    }
  });
  return (
    <div >
      <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/profile" element={ <Profile/>} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
