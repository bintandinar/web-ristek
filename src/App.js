import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";
import EditBlog from "./pages/EditBlog";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NewBlog from "./pages/NewBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path={`/blog/:id`} element={<BlogDetail />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/new-blog`} element={<NewBlog />} />
        <Route path={`/blog/:id/edit`} element={<EditBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
