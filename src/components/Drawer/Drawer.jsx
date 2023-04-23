import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Drawer = ({ isVisible, onClose, children, placement = "right" }) => {
  const { pathname } = useLocation();

  useEffect(()=>{
    if(!isVisible){
      document.body.style.overflow = ""
    } else {
      document.body.style.overflow = "hidden"
    }
  },[isVisible])

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <>
      <div
        className={`page-overlay ${isVisible ? "page-overlay--show" : ""}`}
        onClick={onClose}
      ></div>
      <div
        className={`drawer drawer--${placement} ${
          isVisible ? "drawer--active" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
