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
    context.fillStyle = "white";
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
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(151, 125);
    context.lineTo(150, 128);
    context.lineWidth = 0.7;
    context.strokeStyle = "black";
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
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    //laces
    context.beginPath();
    context.bezierCurveTo(140, 125, 140, 125, 138, 128.5);
    context.lineWidth = 0.9;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(141.8, 127, 141.8, 125.5, 140.5, 130);
    context.lineWidth = 0.9;
    context.strokeStyle = "black";
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
    context.lineWidth = 1.5;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    //contents
    context.beginPath();
    context.rect(174, 92, 13, 20);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect(174, 95, 13, 17);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    //label
    context.beginPath();
    context.rect(175, 97, 11, 12);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(173, 92, 0.8, 20);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(173, 91, 15, 0.8);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(187, 92, 0.8, 20);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(173, 111, 15, 0.8);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.font = "9px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("O+", 174.8, 106);
    context.closePath();
    //tubes
    context.beginPath();
    context.rect(179, 112, 2, 20);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(176, 112, 1, 8);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(175, 118, 3, 3);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(184, 112, 1, 8);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(183, 112, 3, 3);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(183, 118, 3, 3);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    //ro subtype
    context.beginPath();
    context.rect(184, 123, 20, 9);
    context.fillStyle = "orange";
    context.fill();
    context.closePath();
    context.beginPath();
    context.rect(178, 125, 7, 4);
    context.fillStyle = "orange";
    context.fill();
    context.closePath();
    context.beginPath();
    context.font = "9px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("RO", 188, 131);
    context.closePath();

    //left hand
    context.beginPath();
    context.ellipse(177, 89, 1.5, 2.5, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(180, 89, 1.5, 2.5, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.ellipse(183, 89, 1.5, 2.5, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //face
    // eyes
    //right
    context.beginPath();
    context.bezierCurveTo(135, 72, 140, 74, 139, 82);
    context.moveTo(135, 72);
    context.bezierCurveTo(135, 72, 130, 73, 130, 82);
    context.bezierCurveTo(135, 84, 133, 85, 139, 82);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //pupil
    context.beginPath();
    context.ellipse(137, 81, 2.8, 3.8, Math.PI / 5, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //left
    context.beginPath();
    context.bezierCurveTo(147, 72, 143, 75, 143, 82);
    // context.moveTo(147, 71);
    context.bezierCurveTo(147, 86, 152, 83, 152, 82);
    context.moveTo(147, 72);
    context.bezierCurveTo(152, 73, 154, 82, 152, 82);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    //pupil
    context.beginPath();
    context.ellipse(150, 80.7, 2.8, 3.8, Math.PI / 5, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    // mouth
    context.beginPath();
    context.moveTo(152, 92);
    context.lineTo(154, 89);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(150, 89, 153, 86, 156, 92);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(128, 94, 144, 102, 152.5, 91);
    context.bezierCurveTo(152.5, 91, 145, 125, 128, 94);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    //tongue
    context.beginPath();
    context.ellipse(144, 104, 2, 3, Math.PI / 3.5, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(142, 105, 2, 3, Math.PI / 3.5, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.closePath();
    context.beginPath();
    context.ellipse(139, 104.5, 2, 3, Math.PI / 1.7, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
    context.closePath();
    // nose

    context.beginPath();
    context.ellipse(141, 89, 2, 3, Math.PI / 2, 0, Math.PI * 2);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    // speech bubbles
    context.beginPath();
    context.ellipse(58, 35, 21, 43, Math.PI / 2, 0, Math.PI * 2);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(97, 43);
    context.lineTo(110, 65);
    context.lineTo(79, 53);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.font = "9px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("Good trade for a", 24, 30);
    context.closePath();
    context.beginPath();
    context.font = "9px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("cup of tea", 34, 39);
    context.closePath();
    context.beginPath();
    context.font = "9px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("and a biscuit", 39, 49);
    context.closePath();

    // sticker bubble
    context.beginPath();
    context.ellipse(65, 127, 10, 53, Math.PI / 2, 0, Math.PI * 2);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(15, 130);
    context.lineTo(8, 144);
    context.lineTo(23, 133);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.closePath();
    context.beginPath();
    context.font = "8px Comic Sans MS";
    context.fillStyle = "black";
    context.fillText("Don't forget your sticker", 18, 130);
    context.closePath();

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
