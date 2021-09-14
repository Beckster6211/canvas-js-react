import React, { useState, useEffect, useRef } from "react";
// import "./xmas.css";

function XmasSnowman() {
  const canvas = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const calculateScaleX = () => canvas.current.clientWidth / scaleWidth;
  const calculateScaleY = () => canvas.current.clientHeight / scaleHeight;

  const resized = () => {
    canvas.current.width = canvas.current.clientWidth;
    canvas.current.height = canvas.current.clientHeight;
    setScale({ x: calculateScaleX(), y: calculateScaleY() });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  useEffect(() => {
    const currentCanvas = canvas.current;
    currentCanvas.addEventListener("resize", resized);
    return () => currentCanvas.removeEventListener("resize", resized);
  });

  useEffect(() => {
    draw(canvas.current, scale.x, scale.y);
  }, [scale]);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const scaleWidth = 1000;
  const scaleHeight = 1000;

  function draw(canvas, scaleX, scaleY) {
    const context = canvas.getContext("2d");
    context.scale(scaleX, scaleY);
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    // //background
    context.beginPath();
    context.rect(0, 0, 300, 150);
    context.fillStyle = "slateBlue";
    context.fill();
    context.closePath();

    // snowman
    // arms
    context.beginPath();
    context.moveTo(129, 82);
    context.lineTo(105, 73);
    context.moveTo(118, 78);
    context.lineTo(106, 85);
    context.moveTo(117, 77);
    context.lineTo(113, 64);
    context.lineWidth = 4;
    context.strokeStyle = "saddleBrown";
    context.stroke();
    context.closePath();
    //
    context.beginPath();
    context.moveTo(167, 82);
    context.lineTo(185, 73);
    context.moveTo(175, 79);
    context.lineTo(176, 66);
    context.moveTo(187, 84);
    context.lineTo(173, 77);
    context.lineWidth = 4;
    context.strokeStyle = "saddleBrown";
    context.stroke();
    context.closePath();

    //body
    context.beginPath();
    context.arc(148, 120, 24, 0, Math.PI * 2, true);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(148, 82, 20, 0, Math.PI * 2, true);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(148, 55, 16, 0, Math.PI * 2, true);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    // hat
    context.beginPath();
    context.rect(130, 35, 35, 8);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(135, 15, 25, 20);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // eyes
    context.beginPath();
    context.arc(154, 48, 2.4, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(142, 48, 2.4, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // nose
    context.beginPath();
    context.moveTo(140, 53);
    context.lineTo(156, 53);
    context.lineTo(148, 59);
    // context.lineTo(52, 80);
    context.fillStyle = "orange";
    context.fill();
    context.closePath();
    // mouth
    context.beginPath();
    context.arc(137, 56, 2, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(141, 61, 2, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(148, 63, 2, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(155, 61, 2, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(159, 56, 2, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // buttons
    context.beginPath();
    context.arc(148, 80, 3, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(148, 100, 3, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(148, 120, 3, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // scarf
    context.beginPath();
    context.bezierCurveTo(132, 68, 150, 75, 163, 68);
    context.lineWidth = 5;
    context.strokeStyle = "darkBlue";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(160, 66, 163, 70, 163, 87);
    context.lineWidth = 4;
    context.strokeStyle = "darkRed";
    context.stroke();
    context.closePath();

    // message
    context.beginPath();
    context.font = "16px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("Up the Villa!", 10, 57);
    context.closePath();
  }
  return (
    <div className="App">
      <div className="xmasSnowman">
        {/* <h6 className="text">#Piper, thanks for the idea 👍</h6> */}
        <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
        {/* <h6 className="butterfreeText">
          What kind of suppose to look like...? 🦋
        </h6>
        <img
          className="butterfree"
          src="./images/Character-Chronicle-Butterfree.jpg"
          alt="butterfree"
        />
        <h6 className="text">
          Sorry couldn't leave out my personal favourite Charmander 😁
        </h6>
        <img
          className="charmander"
          src="./images/20210320_155852.jpg"
          alt="my Charmander collection"
        /> */}
      </div>
    </div>
  );
}

export default XmasSnowman;
