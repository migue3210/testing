import React from 'react';
import logo from './logo.svg';
import './App.css';

function Navbar() {
  const items = [
    { title: "about", link: "" },
    { title: "content1", link: "" },
    { title: "content2", link: "" },
    { title: "content3", link: "" },
  ]
  const styles = {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
  }
  return (
    items.map(item =>
      <ul style={styles}>
        <li><a href={item.link}>{item.title}</a></li>
      </ul>
    )

  )
}

function App() {
  return (
    <><Navbar></Navbar><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div></>
  );
}

export default App;
