import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

function Loading(props) {
  return (
    <div>
      <Dimmer active>
        <Loader>{props.msg || "Loading..."}</Loader>
      </Dimmer>
    </div>
  );
}

Loading.defaultProps = {
  msg: "Loading...",
};

export default Loading;
