import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoaderPage.css";
import { motion } from "framer-motion";

function LoaderPage() {
  const [loader, setLoader] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loaderFn = () => {
      loader < 19
        ? setInterval(() => {
            setLoader(loader + 1);
          }, 3000)
        : navigate("/");
    };
    loaderFn();
    return () => clearInterval(loaderFn);
  }, [loader, navigate]);

  return (
    <>
      <motion.div
        className="loader"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0, transition: { duration: "1s" } }}
      >
        <div className="loader_box">{loader}</div>
      </motion.div>
    </>
  );
}

export default LoaderPage;
