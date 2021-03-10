import "./styles/App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import MyBlogs from "./components/MyBlogs";

const App = () => {
  const _ScrollToTop = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  };
  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home" component={Home} />
              <Route path="/myblogs" component={MyBlogs} />
              <Route path="/create" component={Create} />
              <Route path="/blogs/:id" component={BlogDetails} />
              <Route path="*">
                <NotFound message={"This Page Could Not Be Found..."} />
              </Route>
            </Switch>
          </ScrollToTop>
        </div>
      </div>
    </Router>
  );
};

export default App;
