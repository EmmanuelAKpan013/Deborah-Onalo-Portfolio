import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoaderPage.css";

function LoaderPage() {
  const [loader, setLoader] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loaderFn = () => {
      loader < 21
        ? setInterval(() => {
            setLoader(loader + 1);
            console.log(loader);
          }, 1000)
        : navigate("/homepage");
    };
    loaderFn();
    return () => clearInterval(loaderFn);
  }, [loader, navigate]);

  return (
    <>
      <div className="loader">{loader}</div>
    </>
  );
}

export default LoaderPage;
