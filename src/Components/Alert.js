import React from 'react';

const AlertComponent = (props) => {
  
  if (!props.alert) {
    return null;
  }

  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}</strong>: {props.alert.msg}
      
    </div>
  );
}

export default AlertComponent;
