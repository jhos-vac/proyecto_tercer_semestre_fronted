import './App.css';
import RootLayout from "./layouts/RootLayout";
import {Home} from "./pages/Home";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Users} from "./pages/Users";
import {NotFound} from "./pages/NotFound";
import {Proyects} from "./pages/Proyects";
import {Episodes} from "./pages/Episodes";
import React from "react";


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='character' element={<Users />}/>
        <Route path='localizations' element={<Proyects />}/>
        <Route path='episodes' element={<Episodes />}/>
        <Route path="*" element={<NotFound />}/>
    </Route>
))

function App() {
  return (
          <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
