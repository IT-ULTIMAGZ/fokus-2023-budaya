import logo from './logo.svg';
import './App.css';

import Page4No1 from './pages/Page4/Page4.1';
import Page4No2 from './pages/Page4/Page4.2';
import Page4No3 from './pages/Page4/Page4.3';
import Page4No4 from './pages/Page4/Page4.4';
import Page4No5 from './pages/Page4/Page4.5';
import Page4No6 from './pages/Page4/Page4.6';
import Page4No7 from './pages/Page4/Page4.7';
import Page1 from './pages/Page1/Page1';
function App() {
  return (
    <div className="App">
      <Page1/>
      <Page4No1></Page4No1>
      <Page4No2></Page4No2>
      <Page4No3></Page4No3>
      <Page4No4></Page4No4>
      <Page4No5></Page4No5>
      {/* <Page4No6></Page4No6> */}
      <Page4No7></Page4No7>
    </div>
  );
}

export default App;
