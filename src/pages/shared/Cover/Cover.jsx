import React from "react";

const Cover = ({bgImg, title, description}) => {
  return (
    <div
      className="hero h-[550px]"
      style={{
        backgroundImage:
          `url("${bgImg}")`,
      }}
    >
      <div className="hero-content text-center text-neutral-content bg-black py-12 px-28 bg-opacity-60 rounded">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
