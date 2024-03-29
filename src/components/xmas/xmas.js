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
    context.rect(115, 60, 90, 70);
    context.fillStyle = "lightSalmon";
    context.fill();
    context.closePath();

    //smoke
    context.beginPath();
    context.bezierCurveTo(190, 18, 186, 20, 188, 28);
    context.moveTo(190, 18);
    context.bezierCurveTo(190, 8, 195, 15, 195, 6);
    context.lineWidth = 2;
    context.strokeStyle = "grey";
    context.stroke();
    context.closePath();
    //chimney
    context.beginPath();
    context.rect(183, 27, 8, 20);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    //roof
    context.beginPath();
    context.moveTo(114, 60);
    context.lineTo(160, 20);
    context.lineTo(206, 60);
    context.lineTo(135, 60);
    context.fillStyle = "darkRed";
    context.fill();
    context.closePath();
    //roof snow
    context.beginPath();
    context.moveTo(115, 60);
    context.lineTo(160, 20);
    context.lineTo(205, 60);
    context.lineCap = "round";
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    //door
    context.beginPath();
    context.rect(130, 95, 20, 35);
    context.fillStyle = "darkGoldenRod";
    context.fill();
    context.closePath();
    // door window
    context.beginPath();
    context.ellipse(140, 101, 3, 6, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "lightYellow";
    context.fill();
    context.lineWidth = 1.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // pattern
    context.beginPath();
    context.moveTo(140, 98);
    context.lineTo(140, 104);
    context.moveTo(135, 101);
    context.lineTo(145, 101);
    context.lineWidth = 1.3;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // wreath
    context.beginPath();
    context.arc(140, 108, 3, 0, Math.PI * 2, true);
    context.lineWidth = 1.4;
    context.strokeStyle = "green";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(140, 112, 1.5, 0, Math.PI * 2, true);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(137, 117);
    context.lineTo(140, 112);
    context.moveTo(140, 112);
    context.lineTo(143, 117);
    context.lineWidth = 1;
    context.strokeStyle = "red";
    context.stroke();
    context.closePath();
    // doorknob
    context.beginPath();
    context.arc(133, 114, 1, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    //window #1
    context.beginPath();
    context.rect(131, 67, 18, 13);
    context.fillStyle = "purple";
    context.fill();
    context.closePath();
    //window pattern
    context.beginPath();
    context.rect(131, 67, 18, 13);
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(140, 67);
    context.lineTo(140, 80);
    context.moveTo(131, 73);
    context.lineTo(148, 73);
    context.strokeStyle = "black";
    context.lineWidth = 1.4;
    context.stroke();
    context.closePath();
    //under window
    context.beginPath();
    context.rect(127, 81, 26, 4);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    // snow
    context.beginPath();
    context.moveTo(128, 81);
    context.lineTo(151, 81);
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    // window #2
    context.beginPath();
    context.rect(173, 67, 18, 13);
    context.fillStyle = "purple";
    context.fill();
    context.closePath();
    // window pattern
    context.beginPath();
    context.rect(173, 67, 18, 13);
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(182, 68);
    context.lineTo(182, 79);
    context.moveTo(173, 73);
    context.lineTo(190, 73);
    context.strokeStyle = "black";
    context.lineWidth = 1.4;
    context.stroke();
    context.closePath();
    // under window
    context.beginPath();
    context.rect(169, 81, 26, 4);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    // snow
    context.beginPath();
    context.moveTo(170, 81);
    context.lineTo(193, 81);
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    // window #3
    context.beginPath();
    context.rect(173, 100, 18, 13);
    context.fillStyle = "purple";
    context.fill();
    context.closePath();
    // window pattern
    context.beginPath();
    context.rect(173, 100, 18, 13);
    context.strokeStyle = "black";
    context.lineWidth = 1.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(182, 100);
    context.lineTo(182, 113);
    context.moveTo(173, 106);
    context.lineTo(191, 106);
    context.strokeStyle = "black";
    context.lineWidth = 1.4;
    context.stroke();
    context.closePath();
    // under window
    context.beginPath();
    context.rect(170, 114, 26, 4);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    // snow
    context.beginPath();
    context.moveTo(171, 114);
    context.lineTo(195, 114);
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    // message
    context.beginPath();
    context.font = "12px Comic Sans MS";
    context.fillStyle = "white";
    context.fillText("Most wonderful time", 5, 20);
    context.closePath();
    context.beginPath();
    context.font = "12px Comic Sans MS";
    context.fillStyle = "white";
    context.fillText("of the year", 25, 40);
    context.closePath();
    context.beginPath();
    context.font = "12px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("More like most expensive...", 140, 143);
    context.closePath();
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
