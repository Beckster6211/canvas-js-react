import React, { useState, useEffect, useRef } from "react";
// import "./birthday.css";

function GiveBlood() {
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

    //background
    context.beginPath();
    context.rect(0, 0, 2000, 1000);
    context.fillStyle = "beige";
    context.fill();
    context.closePath();

    //billy hair
    context.beginPath();
    context.moveTo(136, 50);
    context.bezierCurveTo(136, 50, 131, 53, 135, 57);
    context.bezierCurveTo(134.5, 57, 140, 60, 133, 65);
    context.bezierCurveTo(132.5, 66, 140, 68, 145, 64);
    context.bezierCurveTo(140.5, 55.5, 137, 60, 136, 49);
    context.lineWidth = 1.5;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "red";
    context.fill();
    context.closePath();

    //arms
    //right arm
    context.beginPath();
    context.ellipse(120, 94, 11, 4, Math.PI / 1.7, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(120, 107, 7, 3, Math.PI / 3, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(118, 101, 2, 2, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();

    //left arm
    context.beginPath();
    context.ellipse(157, 91, 11, 4, Math.PI / 3.2, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(169, 95, 7, 3, Math.PI / 1.3, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(163.5, 97.8, 2, 2, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();

    //left leg
    context.beginPath();
    context.ellipse(144.5, 118, 7, 2, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //shoe
    context.beginPath();
    context.ellipse(147, 130.1, 6.6, 4, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(147, 128, 6.8, 4, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "grey";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //laces
    context.beginPath();
    context.moveTo(149, 125);
    context.lineTo(148, 128);
    context.lineWidth = 0.7;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(151, 125);
    context.lineTo(150, 128);
    context.lineWidth = 0.7;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
    // // context.beginPath();
    // // context.bezierCurveTo(149.8, 124.3, 148, 126, 148.5, 128);
    // // context.lineWidth = 0.9;
    // // context.strokeStyle = "white";
    // // context.stroke();
    // // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(150, 124, 149, 126, 144, 130);
    // context.lineWidth = 0.9;
    // context.strokeStyle = "white";
    // context.stroke();
    // context.closePath();

    // legs
    //right leg
    context.beginPath();
    context.ellipse(135.5, 119, 7, 2, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //shoe
    context.beginPath();
    context.ellipse(137, 131.3, 6.6, 4, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(137, 129.2, 6.8, 4, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "grey";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //laces
    context.beginPath();
    context.bezierCurveTo(140, 125, 140, 125, 138, 128.5);
    context.lineWidth = 0.9;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(141.8, 127, 141.8, 125.5, 140.5, 130);
    context.lineWidth = 0.9;
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();

    //sock
    context.beginPath();
    context.ellipse(135.5, 125, 2.5, 1, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(133.5, 124, 1.5, 1, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(137.5, 124, 1.5, 1, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(135.5, 125, 2, 0.7, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    //sock
    context.beginPath();
    context.ellipse(144.5, 124.5, 2.5, 1, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(142.5, 123, 1.5, 1, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(146.5, 123, 1.5, 1, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(144.5, 124.5, 2, 0.7, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    //billy body
    context.beginPath();
    context.ellipse(140, 90, 27, 18, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(140, 64, 2, 4, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();

    //right hand
    //thumb
    context.beginPath();
    context.ellipse(126, 111, 2, 5, Math.PI / 3.5, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    // palm
    context.beginPath();
    context.ellipse(124, 113, 3.5, 5, Math.PI / 3.5, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //fingers
    context.beginPath();
    context.ellipse(127.5, 113, 1, 2, Math.PI / 1.5, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(126, 115, 1, 2, Math.PI / 1.5, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(124, 116, 1, 2, Math.PI / 1.5, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // mid palm
    context.beginPath();
    context.ellipse(124, 113, 2, 3.9, Math.PI / 3, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    //bloodbag
    //background
    context.beginPath();
    context.moveTo(180, 88);
    context.bezierCurveTo(173, 88, 170, 85, 171, 102);
    context.bezierCurveTo(172, 110, 168, 118, 180, 116);
    context.moveTo(180, 88);
    context.bezierCurveTo(190, 88, 189, 85, 190, 102);
    context.bezierCurveTo(190, 110, 193, 119, 180, 116);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "lightGrey";
    context.fill();
    context.closePath();

    ////////
    // context.beginPath();
    // context.bezierCurveTo(134.5, 57, 140, 60, 133, 65);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(136, 50, 138, 55, 141, 56);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(140.5, 55.5, 144, 60, 145, 64);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(133, 65.5, 140, 68, 145, 64);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();

    // //cake
    // context.beginPath();
    // context.ellipse(140, 128, 20, 10, Math.PI / 1, 0, Math.PI * 2);
    // context.fillStyle = "chocolate";
    // context.fill();
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.rect(120, 101, 40, 25);
    // context.fillStyle = "chocolate";
    // context.fill();
    // context.closePath();
    // //cake outline
    // context.beginPath();
    // context.moveTo(120, 100);
    // context.lineTo(120, 127);
    // context.strokeStyle = "black";
    // context.lineWidth = 1;
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.moveTo(160, 100);
    // context.lineTo(160, 127);
    // context.strokeStyle = "black";
    // context.lineWidth = 1;
    // context.stroke();
    // context.closePath();

    // // icing
    // context.beginPath();
    // context.ellipse(124, 105, 7, 4, Math.PI / 2, 0, Math.PI * 2);
    // context.fillStyle = "pink";
    // context.fill();
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    //

    // // candles
    // //candle 1
    // context.beginPath();
    // context.rect(123.5, 87, 4, 15);
    // context.fillStyle = "white";
    // context.fill();
    // context.closePath();
    // //pattern
    // context.beginPath();
    // context.moveTo(123.5, 87);
    // context.lineTo(127.5, 90);
    // context.strokeStyle = "blue";
    // context.lineCap = "round";
    // context.lineWidth = 0.5;
    // context.stroke();
    // context.closePath();

    // //balloons
    // //string
    // context.beginPath();
    // context.moveTo(35, 76);
    // context.lineTo(45, 114);
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.moveTo(33, 70);
    // context.lineTo(30, 78);
    // context.lineTo(40, 75);
    // context.lineTo(33, 70);
    // context.fillStyle = "springGreen";
    // context.fill();
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();

    // // smiley face
    // // face background
    // context.beginPath();
    // context.arc(265, 120, 20, 0, Math.PI * 2, false);
    // context.fillStyle = "gold";
    // context.fill();
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();

    // //smile
    // context.beginPath();
    // context.bezierCurveTo(253, 125, 265, 140, 277, 125);
    // context.lineWidth = 1.5;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // //eyes
    // context.beginPath();
    // context.bezierCurveTo(253, 115, 258, 108, 262, 115);
    // context.lineWidth = 1.5;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();
    // //hat
    // context.beginPath();
    // context.moveTo(283, 110);
    // context.lineTo(280, 80);
    // context.lineTo(260, 100);
    // context.lineTo(283, 110);
    // context.fillStyle = "white";
    // context.fill();
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.stroke();
    // context.closePath();

    // //present
    // context.beginPath();
    // context.rect(190, 30, 25, 30);
    // context.fillStyle = "lightGrey";
    // context.fill();
    // context.closePath();
    // //bow
    // context.beginPath();
    // context.rect(190, 42, 25, 5);
    // context.fillStyle = "skyBlue";
    // context.fill();
    // context.closePath();
    // context.beginPath();
    // context.rect(200, 30, 5, 30);
    // context.fillStyle = "skyBlue";
    // context.fill();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(202, 30, 200, 23, 208, 20);
    // context.lineWidth = 2.5;
    // context.strokeStyle = "skyBlue";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(210, 20, 214, 26, 204, 30);
    // context.lineWidth = 2.5;
    // context.strokeStyle = "skyBlue";
    // context.stroke();
    // context.closePath();
    // //message
    // context.beginPath();
    // context.font = "15px Comic Sans MS";
    // context.fillStyle = "black";
    // context.fillText("Becky", 178, 125);
    // context.closePath();
  }
  return (
    <div className="App">
      <div className="birthday">
        {/* <p className="text">Hope You Have A Great Day</p> */}
        <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
        {/* <p>Best Wishes</p> */}
      </div>
    </div>
  );
}

export default GiveBlood;
