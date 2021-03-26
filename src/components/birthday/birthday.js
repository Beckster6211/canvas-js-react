import React, { useState, useEffect, useRef } from "react";

function Birthday() {
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

    context.beginPath();
    //background
    context.beginPath();
    context.rect(0, 0, 2000, 1000);
    context.fillStyle = "beige";
    context.fill();
    context.closePath();

    //cake
    context.beginPath();
    context.ellipse(140, 128, 20, 10, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "chocolate";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.rect(120, 101, 40, 25);
    context.fillStyle = "chocolate";
    context.fill();
    context.closePath();
    //cake outline
    context.beginPath();
    context.moveTo(120, 100);
    context.lineTo(120, 127);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(160, 100);
    context.lineTo(160, 127);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.stroke();
    context.closePath();

    // icing
    context.beginPath();
    context.ellipse(124, 105, 7, 4, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(130, 108, 7, 4, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(137, 109, 7, 4, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(144, 109, 7, 4, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(151, 107, 7, 4, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(157, 104, 7, 3, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // icing top
    context.beginPath();
    context.ellipse(140, 100, 20, 10, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "lightPink";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //jam and cream
    context.beginPath();
    context.lineWidth = 1.5;
    context.lineCap = "round";
    context.strokeStyle = "red";
    context.bezierCurveTo(120, 117, 137, 135, 160, 117);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.lineWidth = 1.5;
    context.lineCap = "round";
    context.strokeStyle = "peachPuff";
    context.bezierCurveTo(120, 119, 139, 138, 162, 117);
    context.stroke();
    context.closePath();

    // candles
    //candle 1
    context.beginPath();
    context.rect(123.5, 87, 4, 15);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //pattern
    context.beginPath();
    context.moveTo(123.5, 87);
    context.lineTo(127.5, 90);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(123.5, 97.5);
    context.lineTo(127.5, 101);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(123.5, 92);
    context.lineTo(127.5, 95.5);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    //flame
    context.beginPath();
    context.ellipse(124.5, 75, 7, 3, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(124.5, 79, 4, 1.8, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //candle 2
    context.beginPath();
    context.rect(131, 80, 4, 15);
    context.fillStyle = "white";
    context.fill();

    context.closePath();
    //pattern
    context.beginPath();
    context.moveTo(131, 81);
    context.lineTo(135, 85);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(131, 91);
    context.lineTo(135, 95);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(130.5, 86);
    context.lineTo(135, 90);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    //flame
    context.beginPath();
    context.ellipse(133, 72.5, 7, 3, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(133, 76.5, 4, 1.8, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //candle 3
    context.beginPath();
    context.rect(137, 90, 4, 15);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //pattern
    context.beginPath();
    context.moveTo(137, 90.5);
    context.lineTo(141, 94);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(137, 96);
    context.lineTo(141, 99);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(137, 101);
    context.lineTo(141.5, 104);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    //flame
    context.beginPath();
    context.ellipse(139, 82, 7, 3, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(139, 86, 4, 1.8, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //candle 4
    context.beginPath();
    context.rect(144, 80, 4, 15);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //pattern
    context.beginPath();
    context.moveTo(143, 80);
    context.lineTo(147.5, 84);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(143, 85.5);
    context.lineTo(147.5, 89);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(143, 91);
    context.lineTo(148, 94.5);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    //flame
    context.beginPath();
    context.ellipse(146, 71.5, 7, 3, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(146, 74.5, 4, 1.8, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //candle 5
    context.beginPath();
    context.rect(151, 85, 4, 15);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //pattern
    context.beginPath();
    context.moveTo(150, 85.5);
    context.lineTo(155, 89);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(151, 96);
    context.lineTo(155, 99);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(151, 91);
    context.lineTo(155, 94);
    context.strokeStyle = "blue";
    context.lineCap = "round";
    context.lineWidth = 0.5;
    context.stroke();
    context.closePath();
    //flame
    context.beginPath();
    context.ellipse(153, 77, 7, 3, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(153, 81, 4, 1.8, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //balloons
    //balloon 1
    context.beginPath();
    context.ellipse(30, 50, 20, 10, Math.PI / 2.2, 0, Math.PI * 2);
    context.fillStyle = "springGreen";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //string
    context.beginPath();
    context.moveTo(35, 76);
    context.lineTo(45, 114);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(33, 70);
    context.lineTo(30, 78);
    context.lineTo(40, 75);
    context.lineTo(33, 70);
    context.fillStyle = "springGreen";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //balloon 2
    context.beginPath();
    context.ellipse(50, 45, 20, 10, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "purple";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //string
    context.beginPath();
    context.moveTo(50, 73);
    context.lineTo(45, 114);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(50, 65);
    context.lineTo(55, 73);
    context.lineTo(46, 73);
    context.lineTo(50, 65);
    context.fillStyle = "purple";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //balloon 3
    context.beginPath();
    context.ellipse(70, 50, 20, 10, Math.PI / 1.8, 0, Math.PI * 2);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //string
    context.beginPath();
    context.moveTo(66, 73);
    context.lineTo(45, 114);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(66, 70);
    context.lineTo(70, 77);
    context.lineTo(60, 75);
    context.lineTo(66, 70);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    // smiley face
    // face background
    context.beginPath();
    context.arc(265, 120, 20, 0, Math.PI * 2, false);
    context.fillStyle = "gold";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    //smile
    context.beginPath();
    context.bezierCurveTo(253, 125, 265, 140, 277, 125);
    context.lineWidth = 1.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //eyes
    context.beginPath();
    context.bezierCurveTo(253, 115, 258, 108, 262, 115);
    context.lineWidth = 1.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(268, 115, 272, 108, 277, 115);
    context.lineWidth = 1.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //hat
    context.beginPath();
    context.moveTo(283, 110);
    context.lineTo(280, 80);
    context.lineTo(260, 100);
    context.lineTo(283, 110);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //spots
    context.beginPath();
    context.arc(278, 104, 2, 0, Math.PI * 2, false);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 0.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(275, 96, 2, 0, Math.PI * 2, false);
    context.fillStyle = "grey";
    context.fill();
    context.lineWidth = 0.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(267, 99, 2, 0, Math.PI * 2, false);
    context.fillStyle = "blue";
    context.fill();
    context.lineWidth = 0.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(277, 88, 2, 0, Math.PI * 2, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 0.5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //present
    context.beginPath();
    context.rect(190, 30, 25, 30);
    context.fillStyle = "lightGrey";
    context.fill();
    context.closePath();
    //bow
    context.beginPath();
    context.rect(190, 42, 25, 5);
    context.fillStyle = "skyBlue";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(200, 30, 5, 30);
    context.fillStyle = "skyBlue";
    context.fill();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(200, 30, 188, 25, 193, 20);
    context.lineWidth = 2.5;
    context.strokeStyle = "skyBlue";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(193, 20, 200, 20, 200, 30);
    context.lineWidth = 2.5;
    context.strokeStyle = "skyBlue";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(202, 30, 200, 23, 208, 20);
    context.lineWidth = 2.5;
    context.strokeStyle = "skyBlue";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(210, 20, 214, 26, 204, 30);
    context.lineWidth = 2.5;
    context.strokeStyle = "skyBlue";
    context.stroke();
    context.closePath();
    //message
    context.beginPath();
    context.font = "15px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("Happy", 65, 105);
    context.closePath();
    context.beginPath();
    context.font = "15px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("Birthday", 54, 125);
    context.closePath();
    context.beginPath();
    context.font = "15px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("Love", 180, 105);
    context.closePath();
    context.beginPath();
    context.font = "15px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("Becky", 178, 125);
    context.closePath();
  }
  return (
    <div className="App">
      <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
}

export default Birthday;
