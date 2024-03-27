import { useState } from "react";
import "./App.css";
import { FaRegCopyright } from "react-icons/fa";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function App() {
  const [count, setCount] = useState(parseInt(localStorage.getItem("count")) || 0);

  return (
    <div className="page">
      <div className="container">
        <center>
          <h1 className="head">Count Your Moments</h1>
          <div className="counter">{count}</div>
          <div className="buttons">
            <button
              className="button"
              onClick={() => {
                setCount(count + 1);
                localStorage.setItem("count", count+1);
              }}
            >
              +
            </button>
            <button
              className="button"
              onClick={() => {
                setCount(0);
                localStorage.clear();
              }}
            >
              RESET
            </button>
            <button
              className="button"
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                  localStorage.setItem("count", count-1);
                }
              }}
            >
              -
            </button>
          </div>
        </center>
      </div>
      <footer className="footer">
        <a href="#" className="copyright">
          <FaRegCopyright className="icon"/>
          <span> {new Date().getFullYear()}</span>
          <span> By Vinish Choudhary</span>
        </a>
        <div className="social-media">
            <a href="#" ><BsFacebook className="icon"/></a>
            <a href="#" ><BsInstagram className="icon"/></a>
            <a href="#" ><BsLinkedin className="icon"/></a>
            <a href="#" ><BsGithub className="icon"/></a>
          </div>
      </footer>
    </div>
  );
}

export default App;
