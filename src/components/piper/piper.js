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

    //// wings
    /// #1
    context.beginPath();
    context.ellipse(212, 48, 30, 10, Math.PI / 1.15, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(229, 63, 30, 9, Math.PI / 1.75, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(212, 91, 20, 12, Math.PI * 1.15, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(213, 68, 22, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(221, 50, 20, 8, Math.PI / 1.35, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(220, 85, 10, 8, Math.PI / 1.45, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    ////
    context.beginPath();
    context.ellipse(212, 91, 15, 8, Math.PI * 1.15, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(210, 90, 10, 5, Math.PI * 1.15, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(213, 80, 15, 8, Math.PI * 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(212, 70, 20, 8, Math.PI * 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(212, 60, 25, 8, Math.PI * 0.95, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(210, 51, 25, 8, Math.PI * 0.85, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(202, 55, 15, 5, Math.PI * 0.85, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(199, 57, 15, 5, Math.PI * 0.85, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(214, 100, 212, 96, 212, 96);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(225, 99, 220, 96, 219, 96);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(225, 92, 221, 90, 220, 92);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //////
    // #2
    context.beginPath();
    context.ellipse(160, 60, 30, 10, Math.PI * 1.08, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(154, 76, 32, 15, Math.PI * 1.3, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(175, 95, 25, 10, Math.PI / 1.6, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //////
    context.beginPath();
    context.ellipse(174, 98, 15, 7, Math.PI / 1.6, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(174, 98, 9, 4, Math.PI / 1.6, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(165, 107, 165, 103, 168, 103);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(168, 112, 168, 110, 171, 106);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(175, 112, 178, 110, 175, 104);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(174, 85, 20, 7, Math.PI * 0.8, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(167, 81, 20, 7, Math.PI * 0.95, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(158, 72, 20, 7, Math.PI * 1.02, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(155, 61, 20, 7, Math.PI * 1.07, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(160, 62, 17, 5, Math.PI * 1.05, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(164, 62.5, 17, 3.5, Math.PI * 1.05, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

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
    ////
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
    context.arc(181.5, 65, 5.5, 0, Math.PI * 2, false);
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

    //antenna
    // #1
    context.beginPath();
    context.bezierCurveTo(170, 39, 155, 30, 160, 20);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(160, 20, 7, 2.5, Math.PI / 1.8, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // #2
    context.beginPath();
    context.bezierCurveTo(177, 37, 170, 30, 174, 20);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(175, 18, 7, 2.5, Math.PI / 1.8, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    //// hands
    // #1
    context.beginPath();
    context.ellipse(190, 79, 6, 3, Math.PI / 2.4, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(191, 84.2, 3.5, 1.5, Math.PI / 1.6, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(188, 80, 3.5, 1.5, Math.PI / 1.1, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(188, 75, 3.5, 1.5, Math.PI / 3.5, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(190.5, 79, 4, 1.8, Math.PI / 2.6, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.closePath();
    // #2
    context.beginPath();
    context.ellipse(175, 83, 6, 3, Math.PI / 2.3, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(175.5, 78, 3.5, 1.5, Math.PI / 1.5, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(178, 82.5, 3.5, 1.5, Math.PI / 1.1, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(177, 87, 3.5, 1.5, Math.PI * 1.1, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(175, 83, 4, 2.1, Math.PI / 2.7, 0, Math.PI * 2);
    context.fillStyle = "powderBlue";
    context.fill();
    context.closePath();

    ////// templates

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
