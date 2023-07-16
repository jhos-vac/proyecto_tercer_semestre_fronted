import './App.css';
import RootLayout from "./layouts/RootLayout";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import React from "react";
import {Project} from "./pages/Project";



const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Project />}/>
        <Route path='project' element={<Project/>}/>
        <Route path="*" element={<NotFound />}/>
    </Route>
))

function App() {
  return (
          <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
