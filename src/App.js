import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
       <div className="container">
          <Weather defaultCity="Pretoria" />
          <footer>
            This project was coded by Mitchelle Musarurwa and is on{" "}
            <a
              href="https://github.com/shanellmusarurwa/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a> { " "}
            and {" "}
            <a href="https://bespoke-mousse-040c0d.netlify.app/" target="_blank" rel="noopener noreferrer">
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </>  
  );
}
  
export default App;
