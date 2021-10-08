import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Child from "./components/child/Child";
import Counter from "./components/Counter/Counter";

const App = () => (
  <div className="App">
    <Navbar />
    <Child />
    <Counter />
  </div>
);

export default App;
