import React from "react";

function IconCard({ children, name }) {
  return (
    <div className="p-3 rounded flex justify-center items-center flex-col bg-white">
      <p>{children}</p>
      <p className="mt-2 text-black font-mono font-semibold capitalize">
        {name}
      </p>
    </div>
  );
}

export default IconCard;
