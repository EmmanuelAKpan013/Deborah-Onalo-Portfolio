import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoaderPage.css";
import { motion } from "framer-motion";

function LoaderPage() {
  const [loader, setLoader] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const loaderFn = () => {
      loader <= 9
        ? setInterval(() => {
            setLoader(loader + 1);
          }, 1000)
        : navigate("/homepage");
    };
    loaderFn();
    return () => clearInterval(loaderFn);
  }, [loader, navigate]);

  return (
    <>
      <motion.div
        className="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transitionDuration: "0.5s" }}
      >
        <div className="loader_box">{String(loader).padStart(2, 0)}</div>
      </motion.div>
    </>
  );
}

export default LoaderPage;
