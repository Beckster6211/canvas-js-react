import React, { useState, useEffect, useRef } from "react";
import "./xmas.css";

function Xmas() {
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
    context.rect(0, 0, 300, 90);
    context.fillStyle = "midnightBlue";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(0, 90, 300, 90);
    context.fillStyle = "seaGreen";
    context.fill();
    context.closePath();

    //house
    context.beginPath();
    context.rect(135, 55, 90, 70);
    context.fillStyle = "lightSalmon";
    context.fill();
    context.closePath();

    //smoke
    context.beginPath();
    context.bezierCurveTo(201, 15, 198, 18, 200, 20);
    context.moveTo(201, 15);
    context.bezierCurveTo(200, 8, 195, 15, 200, 6);
    context.lineWidth = 2;
    context.strokeStyle = "grey";
    context.stroke();
    context.closePath();
    //chimney
    context.beginPath();
    context.rect(195, 20, 8, 20);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    //roof
    context.beginPath();
    context.moveTo(135, 55);
    context.lineTo(179, 20);
    context.lineTo(225, 55);
    context.lineTo(135, 55);
    context.fillStyle = "darkRed";
    context.fill();
    context.closePath();
    //roof snow
    context.beginPath();
    context.moveTo(135, 55);
    context.lineTo(179, 20);
    context.lineTo(225, 55);
    context.lineCap = "round";
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    //door
    context.beginPath();
    context.rect(145, 90, 20, 35);
    context.fillStyle = "darkGoldenRod";
    context.fill();
    context.closePath();

    //window 1
    context.beginPath();
    context.rect(145, 63, 18, 13);
    context.fillStyle = "purple";
    context.fill();
    context.closePath();
    //window pattern
    context.beginPath();
    context.rect(145, 63, 18, 13);
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(154, 64);
    context.lineTo(154, 76);
    context.moveTo(145, 69.5);
    context.lineTo(162, 69.5);
    context.strokeStyle = "black";
    context.lineWidth = 1.4;
    context.stroke();
    context.closePath();
    //under window
    context.beginPath();
    context.rect(141, 76.5, 26, 4);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    // snow
    context.beginPath();
    context.moveTo(143, 76);
    context.lineTo(164, 76);
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    // context.beginPath();
    // context.bezierCurveTo(214, 100, 212, 96, 212, 96);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(225, 99, 220, 96, 219, 96);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(225, 92, 221, 90, 220, 92);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.bezierCurveTo(165, 107, 165, 103, 168, 103);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(168, 112, 168, 110, 171, 106);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(175, 112, 178, 110, 175, 104);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();

    // ////
    // //body
    // context.beginPath();
    // context.ellipse(187, 84, 25, 15, Math.PI / 2.4, 0, Math.PI * 2);
    // context.fillStyle = "mediumPurple";
    // context.fill();
    // context.lineWidth = "1";
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();

    // //head
    // context.beginPath();
    // context.arc(177, 50, 15, 0, Math.PI * 2, false);
    // context.fillStyle = "mediumPurple";
    // context.fill();
    // context.lineWidth = "1";
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();

    // //antenna
    // // #1
    // context.beginPath();
    // context.bezierCurveTo(170, 39, 155, 30, 160, 20);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // // message
    // context.beginPath();
    // context.font = "16px Comic Sans MS";
    // context.fillStyle = "black";
    // context.fillText("Don't be down", 10, 57);
    // context.closePath();
  }
  return (
    <div className="App">
      <div className="xmas">
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

export default Xmas;
