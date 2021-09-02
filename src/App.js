import logo from './logo.svg';
import './App.css';
import StockGraph from './components/StockGraph';
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <div style={{margin: "auto", width: "50%"}}>
        <StockGraph/>
      </div>
    </div>
  );
}

export default App;
