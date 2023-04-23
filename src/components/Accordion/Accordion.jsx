import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const Accordion = ({ title, children, isDefaultShow }) => {
  const [isShow, setIsShow] = useState(!!isDefaultShow);
  const [height, setHeight] = useState(0);

  const bodyRef = useRef();

  function handleToggle() {
    setIsShow((prev) => !prev);
  }

  function handleResize() {
    setHeight(bodyRef.current?.offsetHeight);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={cn("accordion", isShow && "accordion--active")}
      style={{ "--height": `${height}px` }}
    >
      <button className="accordion__header" onClick={handleToggle}>
        {title}
        <span className="accordion__icon">
          {isShow ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div className="accordion__body">
        <div className="accordion__content" ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
