import React from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PostDetail from "./components/PostDetail/PostDetail";
import Sidebar from "./components/sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import About from "./pages/about/About";

import "./App.css";
import useDarkMode from "use-dark-mode";
import MyPosts from "./pages/myPosts/myPosts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "./redux/actions/post";
function App() {
  const darkMode = useDarkMode(false);

  const user = true;
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_posts());
  }, []);
  return (
    <div>
      <ScrollToTop smooth color="#6f00ff" />

      <Topbar darkMode={darkMode} />
      <Switch>
        <Route exact path="/">
          <Home darkMode={darkMode} posts={posts} />
        </Route>
        <Route exact path="/myposts">
          <MyPosts />
        </Route>
        <Route path="/register">{!user ? <Home /> : <Register />}</Route>
        <Route path="/login">{!user ? <Home /> : <Login />}</Route>
        <Route exact path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route exact path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route exact path="/post/:postId">
          <Single darkMode={darkMode} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/:id">
          <div style={{ display: "flex" }}>
            <PostDetail posts={posts} />
            <Sidebar darkMode={darkMode} />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
