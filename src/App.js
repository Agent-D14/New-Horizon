import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles";
import Navbar from "./components/Navbar";
import Header from "./components/Header"

function App() {
  return (
    <>
      <Particles
        params={{
          particles:{
            number:{
              value: 30, desnity:{ enable:true, value_area:900}
            },
            shape:{
              type: "circle",
              width: 6,
              color: "#f9ab00"
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
    </>
  );
}

export default App;
