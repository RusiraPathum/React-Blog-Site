
import './App.css';
import Navigation from './component/Navigation';

function App() {

  const title = "Welcome to the new blog";

  return (
    <div className="App">
      <Navigation/>
      <div className="content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default App;
