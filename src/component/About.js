import React, { useEffect, useState } from "react";
import BackgroundImages from "./backgroundImage";

function About() {
  const [background, setBackground] = useState();
  const [change, setChange] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const memesArray = BackgroundImages.image;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[randomNumber];
      setBackground(url);
      setChange(!change);
    }, 3000);
  }, [change]);

  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "91vh",
      }}
    ></div>
  );
}

export default About;
