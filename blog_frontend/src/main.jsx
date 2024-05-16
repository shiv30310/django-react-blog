import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Root from "./App";
import RequireAuth from './protectedRoute';
import Login from './user/login';
import FullPostPage from './page/postPage';
import { AuthProvider } from './contextAPI/useAuth'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={async() => {
        return await fetch(`${import.meta.env.BASE_API_URL}/posts`, {
          method: 'GET',
          'Content-Type': 'application/json'
        })
      }}
      // errorElement={<ErrorPage />}
    >
    <Route 
      path='portal'
      element={
        <RequireAuth>
          {/* <UserPortal/> */}
        </RequireAuth>
      } 
    />
    <Route path="login" element={<Login/>}/>
    <Route 
      path='post/:id' 
      element={<FullPostPage/>}
      loader={async({params}) => {
        return await fetch(`${import.meta.env.BASE_API_URL}/post/${params.id}`, {
          method: "GET"
        })
      }}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>        
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
