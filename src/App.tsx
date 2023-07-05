import './App.css';
import RootLayout from "./layouts/RootLayout";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Users} from "./pages/Users";
import {NotFound} from "./pages/NotFound";
import {Projects} from "./pages/Projects";
import React from "react";


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Users />}/>
        <Route path='users' element={<Users />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path="*" element={<NotFound />}/>
    </Route>
))

function App() {
  return (
          <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
