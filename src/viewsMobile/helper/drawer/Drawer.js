import React, { useRef } from "react";

export const Drawer = ({ children, open, setOpen }) => {
  const drawerRef = useRef();
  const handleClick = (e) => {
    if (drawerRef.current === e.target) {
      setOpen(false);
    }
  };
  if (open)
    return (
      <div
        ref={drawerRef}
        className="fixed top-0 left-0 w-screen h-screen z-10 flex justify-end"
        style={{ background: "rgba(196, 196, 196, 0.3)" }}
        onClick={handleClick}
      >
        <div style={{ width: "300px" }}>{children}</div>
      </div>
    );
  else return null;
};
