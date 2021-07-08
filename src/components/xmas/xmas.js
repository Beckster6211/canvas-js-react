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
    // door window
    context.beginPath();
    context.ellipse(154.5, 96, 3, 6, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "lightYellow";
    context.fill();
    context.lineWidth = 1.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // pattern
    context.beginPath();
    context.moveTo(154.5, 93);
    context.lineTo(154.5, 98);
    context.moveTo(148, 96);
    context.lineTo(160, 96);
    context.lineWidth = 1.3;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // wreath
    context.beginPath();
    context.arc(154.5, 103, 3, 0, Math.PI * 2, true);
    context.lineWidth = 1.4;
    context.strokeStyle = "green";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(154.5, 106, 1.5, 0, Math.PI * 2, true);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(154, 106);
    context.lineTo(152, 109);
    context.moveTo(154, 106);
    context.lineTo(157, 109);
    context.lineWidth = 1;
    context.strokeStyle = "red";
    context.stroke();
    context.closePath();
    // doorknob
    context.beginPath();
    context.arc(148, 110, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
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

    // window 2
    context.beginPath();
    context.rect(192, 63, 18, 13);
    context.fillStyle = "purple";
    context.fill();
    context.closePath();
    // window pattern
    context.beginPath();
    context.rect(192, 63, 18, 13);
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(201, 64);
    context.lineTo(201, 76);
    context.moveTo(192, 69.5);
    context.lineTo(210, 69.5);
    context.strokeStyle = "black";
    context.lineWidth = 1.4;
    context.stroke();
    context.closePath();
    // under window
    context.beginPath();
    context.rect(188, 76.5, 26, 4);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    // snow
    context.beginPath();
    context.moveTo(190, 76);
    context.lineTo(212, 76);
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    // window 3
    context.beginPath();
    context.rect(192, 95, 18, 13);
    context.fillStyle = "purple";
    context.fill();
    context.closePath();
    // window pattern
    context.beginPath();
    context.rect(192, 95, 18, 13);
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(201, 95);
    context.lineTo(201, 108);
    context.moveTo(192, 101.5);
    context.lineTo(210, 101.5);
    context.strokeStyle = "black";
    context.lineWidth = 1.4;
    context.stroke();
    context.closePath();
    // under window
    context.beginPath();
    context.rect(188, 109, 26, 4);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    // snow
    context.beginPath();
    context.moveTo(190, 108);
    context.lineTo(212, 108);
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    // snowman
    // arms
    context.beginPath();
    context.moveTo(39, 97);
    context.lineTo(25, 90);
    context.moveTo(32, 93);
    context.lineTo(28, 85);
    context.moveTo(32, 93);
    context.lineTo(24, 96);
    context.lineWidth = 3;
    context.strokeStyle = "saddleBrown";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(70, 97);
    context.lineTo(82, 90);
    context.moveTo(76, 93);
    context.lineTo(78, 85);
    context.moveTo(76, 93);
    context.lineTo(84, 96);
    context.lineWidth = 3;
    context.strokeStyle = "saddleBrown";
    context.stroke();
    context.closePath();

    //body
    context.beginPath();
    context.arc(55, 125, 17, 0, Math.PI * 2, true);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(55, 100, 15, 0, Math.PI * 2, true);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(55, 80, 12, 0, Math.PI * 2, true);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    // hat
    context.beginPath();
    context.rect(44, 67, 21, 4);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(47, 53, 15, 14);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // eyes
    context.beginPath();
    context.arc(51, 76, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(58, 76, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // nose
    context.beginPath();
    context.moveTo(52, 80);
    context.lineTo(54.5, 84);
    context.lineTo(57, 80);
    context.lineTo(52, 80);
    context.fillStyle = "orange";
    context.fill();
    context.closePath();
    // mouth
    context.beginPath();
    context.arc(48, 83, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(51, 86, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(55, 87, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(59, 86, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(62, 83, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // buttons
    context.beginPath();
    context.arc(55, 98, 2, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(55, 112, 2, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(55, 127, 2, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // scarf
    context.beginPath();
    context.bezierCurveTo(45, 88, 56, 95, 65, 88);
    context.lineWidth = 3;
    context.strokeStyle = "purple";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(62, 90, 68, 93, 65, 100);
    context.lineWidth = 3;
    context.strokeStyle = "purple";
    context.stroke();
    context.closePath();

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
