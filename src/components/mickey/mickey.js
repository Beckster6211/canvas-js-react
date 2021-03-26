import React, { useState, useEffect, useRef } from "react";
import "./mickey.css";

function Mickey() {
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

    // left ear
    context.beginPath();
    context.arc(110, 40, 30, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // right ear
    context.beginPath();
    context.arc(210, 40, 30, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // head background
    context.beginPath();
    context.arc(160, 95, 50, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //face
    context.beginPath();
    context.ellipse(149, 76, 20, 12, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "bisque";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(171, 76, 20, 12, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "bisque";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(160, 103, 35, 0, Math.PI * 1, false);
    context.fillStyle = "bisque";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(133, 104, 10, 0, Math.PI * 2, false);
    context.fillStyle = "bisque";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(187, 104, 10, 0, Math.PI * 2, false);
    context.fillStyle = "bisque";
    context.fill();
    context.closePath();

    //mouth
    context.beginPath();
    context.arc(160, 109, 23, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(156, 96, 15, 0, Math.PI * 2, false);
    context.fillStyle = "bisque";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(163, 96, 15, 0, Math.PI * 2, false);
    context.fillStyle = "bisque";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(160, 105, 26, 12, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "bisque";
    context.fill();
    context.closePath();

    // left eye
    context.beginPath();
    context.ellipse(154, 80, 12, 5, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(154, 85, 6, 2, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //right eye
    context.beginPath();
    context.ellipse(166, 80, 12, 5, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(166, 85, 6, 2, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //eye line
    context.beginPath();
    context.bezierCurveTo(145, 95, 158, 88, 176, 95);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //mouth line
    context.beginPath();
    context.bezierCurveTo(133, 105, 135, 110, 138, 112);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(139, 104, 129, 100, 131, 112);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(188, 105, 185, 110, 182, 112);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(181, 104, 192, 100, 190, 112);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //nose
    context.beginPath();
    context.ellipse(160, 103, 12, 5, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //tongue
    context.beginPath();
    context.ellipse(155, 126, 8, 4, Math.PI * 1.07, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(160, 125, 10, 4.6, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(165, 126, 8, 4, Math.PI / 1.07, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(156, 120, 165, 122, 162, 126);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //b
    context.beginPath();
    context.moveTo(25, 70);
    context.lineTo(35, 110);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(25, 70);
    context.lineTo(38, 75);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(38, 75);
    context.lineTo(30, 90);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(30, 90);
    context.lineTo(43, 96);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(43, 96);
    context.lineTo(35, 110);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // l
    context.beginPath();
    context.moveTo(38, 68);
    context.lineTo(46, 105);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(46, 105);
    context.lineTo(54, 95);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // j
    context.beginPath();
    context.moveTo(25, 70);
    context.lineTo(78, 64);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(54, 95);
    context.lineTo(64, 102);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(64, 102);
    context.lineTo(65, 65);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
  }
  return (
    <div className="Mickey">
      <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
}

export default Mickey;
