import React, { useState, useEffect, useRef } from "react";

function PandaTrex() {
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

    //panda
    //body
    context.beginPath();
    context.arc(60, 94, 23, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //arms
    context.beginPath();
    context.ellipse(42, 83, 16, 6, Math.PI / 1.5, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    ///////
    context.beginPath();
    context.ellipse(77, 83, 16, 6, Math.PI / 3, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //feet
    context.beginPath();
    context.arc(46, 115, 10, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    ///////
    context.beginPath();
    context.arc(74, 115, 10, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //ears
    context.beginPath();
    context.arc(47, 43, 8, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    /////
    context.beginPath();
    context.arc(73, 43, 8, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //head
    context.beginPath();
    context.arc(60, 57, 17, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //eyes
    context.beginPath();
    context.arc(55, 52, 4.6, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(55, 52, 3, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(55.5, 51.5, 2.3, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(56.5, 50.5, 1, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    ///////
    context.beginPath();
    context.arc(65, 52, 4.6, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(65, 52, 3, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(64.5, 51.5, 2.3, 0, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(63.5, 50.5, 1, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //nose
    context.beginPath();
    context.ellipse(60, 60, 6.5, 2.5, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(62, 59.3, 2.5, 1, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //mouth
    context.beginPath();
    context.moveTo(60, 62);
    context.lineTo(60, 67);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(53, 65, 55, 70, 60, 66);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(60, 65, 62, 70, 68, 66);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    ///t-rex
    // head
    // higher
    context.beginPath();
    context.moveTo(237, 60);
    context.lineTo(274, 89);
    context.lineTo(269, 64);
    context.lineTo(247, 49);
    context.lineTo(237, 60);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // body
    context.beginPath();
    context.ellipse(258, 105, 29, 18, Math.PI / 1.8, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(274, 87, 280, 100, 274, 115);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(250, 81, 224, 115, 252, 133);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(252, 133, 256, 134, 259, 133);
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

    //lower jaw
    context.beginPath();
    context.rect(235, 72, 25, 9);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(235, 72);
    context.lineTo(251, 72);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(235, 72);
    context.lineTo(235, 81);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(235, 81);
    context.lineTo(251, 81);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
  }
  return (
    <div className="App">
      <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
}

export default PandaTrex;
