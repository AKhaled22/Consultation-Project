import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

function AlertDismissible({ message, variant }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
  }, [message]);

  return (
    <>
      {show && (
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{message}</Alert.Heading>
          <p>Change it and try again</p>
        </Alert>
      )}
    </>
  );
}

export default AlertDismissible;
