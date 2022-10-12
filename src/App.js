import React, { useState } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

function App() {
  const [lat, setLat] = useState("");
  const [errMsg, setErrMsg] = useState("");

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      //update state
      setLat(position.coords.latitude);
    },
    (err) => {
      setErrMsg(err.message);
    }
  );

  //create function before return and render
  const renderContent = () => {
    if (errMsg && !lat) {
      return (
        <div>
          <Loading msg={`Error: ${errMsg}`} />
        </div>
      );
    } else if (lat && !errMsg) {
      return <SeasonDisplay lat={lat} />;
    } else {
      return (
        <div>
          <Loading msg="Please accept the location request ..." />
        </div>
      );
    }
  };

  //return statement
  return renderContent();
}

export default App;
