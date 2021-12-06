import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { GiHook } from 'react-icons/gi';
import { DiReact } from 'react-icons/di';

function App() {
  const [count, setCount] = useState(0);

  return (

    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <br />
            <div className="jumbotron">
              <h1>React Hooks</h1>
              <button type="button" className="btn btn-dark">
                Contando click <span className="badge bg-secondary">{count}</span>
              </button>
            </div>
            <br />
            <div className="jumbotron">
              <button type="button" className="btn btn-primary" onClick={() => { setCount(count + 1) }}>
                +
              </button>
              <span>&nbsp;</span>
              <button type="button" className="btn btn-danger" onClick={() => { setCount(count - 1) }}>
                -
              </button>
            </div>

          </div>
        </div>
        <DiReact size={200} style={{ color: "cyan" }} />
        <GiHook size={200} style={{ color: "cyan" }} />

        <Footer />
      </div>
    </div>

  );
}

export default App;
