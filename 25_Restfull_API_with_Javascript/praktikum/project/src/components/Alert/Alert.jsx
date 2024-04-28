import { useEffect, useState } from "react";
import "./Alert.css";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Delay in milliseconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    isVisible && <div className="alert">Welcome</div>
  );
};

export default Alert;
