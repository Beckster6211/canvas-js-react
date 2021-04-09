import React, { useState, useEffect, useRef } from "react";
// import "../../App.css";
// import "./mickey.css";

function Piper() {
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
    context.rect(0, 0, 2000, 1000);
    context.fillStyle = "paleGreen";
    context.fill();
    context.closePath();

    //feet
    //foot 1
    context.beginPath();
    context.ellipse(185, 120, 18, 7, Math.PI / 2, 0, Math.PI * 2);
    context.fillStyle = "mediumTurquoise";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(184, 128, 9, 5, Math.PI / 2.2, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.closePath();
    //foot 2
    context.beginPath();
    context.ellipse(205, 118, 18, 7, Math.PI / 2.8, 0, Math.PI * 2);
    context.fillStyle = "mediumTurquoise";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(208, 125, 10, 5, Math.PI / 2.9, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.closePath();

    //body
    context.beginPath();
    context.ellipse(187, 84, 25, 15, Math.PI / 2.4, 0, Math.PI * 2);
    context.fillStyle = "mediumPurple";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //head
    context.beginPath();
    context.arc(177, 50, 15, 0, Math.PI * 2, false);
    context.fillStyle = "mediumPurple";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(182, 65, 5, 0, Math.PI * 2, false);
    context.fillStyle = "mediumPurple";
    context.fill();
    context.closePath();

    //eyes
    // eye 1
    context.beginPath();
    context.ellipse(167, 49, 8.5, 4.5, Math.PI / 1.75, 0, Math.PI * 2);
    context.fillStyle = "lightCoral";
    context.fill();
    context.lineWidth = "0.6";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(167.5, 47.5, 6, 3, Math.PI / 1.75, 0, Math.PI * 2);
    context.fillStyle = "crimson";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(168, 45.5, 4, 2, Math.PI / 1.75, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //eye 2
    context.beginPath();
    context.ellipse(184, 46, 8.5, 4.5, Math.PI / 3.1, 0, Math.PI * 2);
    context.fillStyle = "lightCoral";
    context.fill();
    context.lineWidth = "0.6";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(183.2, 44.7, 6, 3, Math.PI / 3.1, 0, Math.PI * 2);
    context.fillStyle = "crimson";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(182, 42.5, 4, 2, Math.PI / 3.1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    //nose
    context.beginPath();
    context.ellipse(174, 56, 3, 1.5, Math.PI / 2.4, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "0.6";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(180, 55, 3, 1.5, Math.PI / 2.4, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "0.6";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(176.5, 54.5, 5, 2, Math.PI / 1.08, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "0.6";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    ////// templates

    //eye line
    context.beginPath();
    context.bezierCurveTo(35, 95, 38, 88, 56, 95);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //tail
    context.beginPath();
    context.moveTo(290, 130);
    context.lineTo(274, 115);
    context.lineTo(258, 134);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(290, 130);
    context.lineTo(274, 115);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.moveTo(290, 130);
    context.lineTo(259.5, 133.5);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
  }
  return (
    <div className="App">
      <div className="">
        {/* <h6 className="">
          “I only hope that we don't lose sight of one thing — that it was all
          started by a mouse.”-Walt Disney.
        </h6> */}
        {/* <p>No explanation needed. LEGEND</p> */}
        <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
      </div>
    </div>
  );
}

export default Piper;
