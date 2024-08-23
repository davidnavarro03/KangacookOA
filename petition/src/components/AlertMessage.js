import { useState } from "react";
import { Alert } from "react-bootstrap";

function AlertMessage({ msg, setMsg }) {
  return (
    <Alert variant="primary" onClose={() => setMsg("")} dismissible>
      <Alert.Heading>{msg}</Alert.Heading>
    </Alert>
  );
}

export default AlertMessage;