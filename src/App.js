import './App.css';
import { Card } from 'react-github-stats-card-v2';

function App() {
  return (
    <div className="App">
      <h1 style={{fontFamily: 'Trebuchet MS', textTransform: 'uppercase', textAlign: 'center'}}>React GitHub Stats Card v2</h1>
      <Card username="cnocon" theme={true} />
    </div>
  );
}

export default App;
