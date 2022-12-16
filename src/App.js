import { Route, Routes } from "react-router-dom";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import Photos from "./components/Photos/Photos";
import Posts from "./components/Posts/Posts";
import Todos from "./components/Todos/Todos";
import Users from "./components/Users/Users";
import { PUBLIC_ROUTES } from "./constants/routes.constants";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PUBLIC_ROUTES.POSTS} element={<Posts />} exact />
        <Route path={PUBLIC_ROUTES.COMMENTS} element={<Comments />} />
        <Route path={PUBLIC_ROUTES.ALBUMS} element={<Albums />} />
        <Route path={PUBLIC_ROUTES.PHOTOS} element={<Photos />} />
        <Route path={PUBLIC_ROUTES.TODOS} element={<Todos />} />
        <Route path={PUBLIC_ROUTES.USERS} element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
