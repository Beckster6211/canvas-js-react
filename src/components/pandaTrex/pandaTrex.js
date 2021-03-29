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
    context.fillStyle = "mediumPurple";
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

    ///////////////////t-rex
    // head
    // higher
    //teeth
    context.beginPath();
    context.moveTo(237, 60);
    context.lineTo(237, 64);
    context.lineTo(241, 64);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(241, 64);
    context.lineTo(246, 67);
    context.lineTo(241, 67);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(246, 67);
    context.lineTo(246, 70);
    context.lineTo(250, 70);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    // head
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

    //hind leg
    //////////
    //nails
    context.beginPath();
    context.moveTo(226, 127);
    context.lineTo(222, 125);
    context.lineTo(226, 122);
    context.fillStyle = "burlyWood";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(226, 127);
    context.lineTo(224, 131);
    context.lineTo(229, 130);
    context.fillStyle = "burlyWood";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(229, 130);
    context.lineTo(229, 135);
    context.lineTo(233, 131);
    context.fillStyle = "burlyWood";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(233, 124, 7, 0, Math.PI * 2, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.ellipse(242, 119, 14, 10, Math.PI / 1.2, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(229, 118, 239, 108, 239, 112);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(237, 130, 244, 127, 246, 128);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    ////
    //arm
    context.beginPath();
    context.ellipse(241, 95, 7, 2, Math.PI / 1.2, 0, Math.PI * 2);
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
    //teeth
    context.beginPath();
    context.moveTo(236, 71);
    context.lineTo(238, 69);
    context.lineTo(240, 71);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(240, 71);
    context.lineTo(242, 69);
    context.lineTo(244, 71);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    ///////
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

    //legs
    //hind
    //claws
    context.beginPath();
    context.moveTo(235, 139);
    context.lineTo(230, 140);
    context.lineTo(235, 143);
    context.fillStyle = "burlyWood";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(235, 144);
    context.lineTo(233, 148);
    context.lineTo(238, 147);
    context.fillStyle = "burlyWood";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(244, 147);
    context.lineTo(240, 150);
    context.lineTo(238, 147);
    context.fillStyle = "burlyWood";
    context.fill();
    context.closePath();

    ///////
    context.beginPath();
    context.arc(242, 140, 7, 0, Math.PI * 2, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(260, 125, 11, 0, Math.PI * 2, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(251, 133, 14, 10, Math.PI / 1.2, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(238, 134, 246, 124, 250, 121);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(247, 145, 255, 144, 263, 136);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    // arm
    context.beginPath();
    context.arc(259, 97.5, 2.5, 0, Math.PI * 2, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(253, 101, 7, 2, Math.PI / 1.2, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(256, 97, 245, 100, 247, 106);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(258, 100, 258, 103, 247, 106);
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
