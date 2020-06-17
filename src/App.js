import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav.js";
import Research from "./components/Research.js";
import Footer from "./components/Footer.js";
import People from "./components/People.js";
import Publication from "./components/Publication.js";


class App extends Component{
  render(){ 
    return (
      <Router>
      <div>
            <Nav />

            <Switch>
              <Route exact path="/" component={Research} />
              <Route path="/publications" component={Publication} />
              <Route path="/people" component={People} />
            </Switch>

            <Footer />
      </div>
      </Router>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Header from './components/Header';

//  class App extends Component{
//      render(){
//          return (
//           <div className="App">
//           <header className="App-header">
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//         );
//     }
// }

// export default App();


