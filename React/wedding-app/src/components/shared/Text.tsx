import React from "react";

function Text({ children }: { children: string }) {
  const message = children.split("\n").map((str, index, array) => {
    return (
      <React.Fragment key={index}>
        {str}
        {index === array.length - 1 ? null : <br />}
      </React.Fragment>
    );
  });
  // console.log("message", message);
  return <div>{message}</div>;
}

export default Text;
