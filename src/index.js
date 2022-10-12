import "./style/App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// //class base component
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     //THIS IS THE ONLY TIME TO DIRECT ASSIGN STATE
//     //we did not!!. Direct assignment to state
//     this.state = { lat: 40 };

//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         //we called setState!!
//         this.setState({ lat: position.coords.latitude });
//       },
//       (err) => console.log(err)
//     );
//   }
//   //we need to define render and return!
//   render() {
//     return <div className="div">Latitude: {this.state.lat}</div>;
//   }
// }

root.render(<App />);
