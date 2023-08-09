import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Pages from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        {Pages.map((p, i) => (
							<Route key={i} {...p} />
						))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
