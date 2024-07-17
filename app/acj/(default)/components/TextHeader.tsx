import React from "react";

const TextHeader = () => {
  return (
    <div className="flex flex-col items-center max-w-3xl">
      <h1 className="mx-auto text-center text-2xl md:text-5xl font-medium max-w-3xl">
        Découvrez les histoires les plus captivantes et inspirantes
      </h1>
      <h2 className="text-sm my-6 leading-7 text-center font-light max-w-lg">
        ACJ est la destination idéale pour apprendre, partager et se connecter
        avec les passionnés de savoir du monde entier.
      </h2>
    </div>
  );
};

export default TextHeader;
