import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoaderPage.css";
import { motion } from "framer-motion";

function LoaderPage() {
  const [loader, setLoader] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loaderFn = () => {
      loader < 21
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
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: "0.1s" } }}
      >
        {loader}
      </motion.div>
    </>
  );
}

export default LoaderPage;
