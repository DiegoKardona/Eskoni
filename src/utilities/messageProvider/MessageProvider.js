import React from "react";

const MessageProvider = props => {
  alert(props.message);
  return <div />;
};

export default MessageProvider;
