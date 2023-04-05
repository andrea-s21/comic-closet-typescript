import React from "react";

export default function Button(props:{ handleClick: any}) {
  return (
    <div>
      <button onClick={props.handleClick}>Get Comics</button>
    </div>
  );
}