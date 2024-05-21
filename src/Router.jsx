import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersLayout from "./layouts/Users/Users";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import Categories from "./screens/Users/Categories";
import Comments from "./screens/Users/Comments";
import Dashboard from "./screens/Users/Dashboard";
import Posts from "./screens/Users/Posts";
import AddPost from "./screens/Users/AddPost";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* --------- LANDING PAGE ---------- */}
        <Route path="/" element={<UsersLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/comments" element={<Comments />} />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
