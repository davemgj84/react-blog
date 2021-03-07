import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
