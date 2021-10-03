import React, { useState, useEffect, useRef } from "react";
// import "./xmas.css";

function Halloween() {
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
    context.rect(0, 0, 300, 150);
    context.fillStyle = "beige";
    context.fill();
    context.closePath();

    ///////// computer
    ////// monitor
    // computer screen base
    context.beginPath();
    context.ellipse(217, 113, 15, 6, Math.PI * 1.04, 0, Math.PI * 2);
    context.fillStyle = "silver";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(212, 111);
    context.lineTo(215, 100);
    context.lineTo(223, 101);
    context.lineTo(222, 112);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "silver";
    context.fill();
    context.closePath();
    // computer screen outline
    context.beginPath();
    context.moveTo(194, 99);
    context.lineTo(200, 54);
    context.lineTo(251, 59);
    context.lineTo(245, 105);
    context.lineTo(194, 99);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "silver";
    context.fill();
    context.closePath();
    // computer screen screen
    context.beginPath();
    context.moveTo(240, 100);
    context.lineTo(200, 95);
    context.lineTo(205, 60);
    context.lineTo(245, 64);
    context.lineTo(240, 100);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    ///// computer computer
    context.beginPath();
    context.moveTo(260, 60);
    context.lineTo(253, 110);
    context.lineTo(265, 112);
    context.moveTo(260, 60);
    context.lineTo(275, 45);
    context.lineTo(285, 46);
    context.lineTo(280, 95);
    context.lineTo(265, 112);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(265, 112);
    context.lineTo(272, 61.5);
    context.lineTo(260, 60);
    context.moveTo(285, 46);
    context.lineTo(272, 61.5);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    // keyboard
    context.beginPath();
    context.moveTo(200, 120);
    context.lineTo(230, 125);
    context.lineTo(229, 133);
    context.lineTo(199, 128);
    context.lineTo(200, 120);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "grey";
    context.fill();
    context.closePath();

    // mouse
    context.beginPath();
    context.ellipse(248, 128, 5, 3, Math.PI / 2, 0, Math.PI * 2);
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "grey";
    context.fill();
    context.closePath();

    // computer face
    context.beginPath();
    context.bezierCurveTo(208, 70, 216, 65, 222, 72);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(227, 72.5, 235, 67, 240, 74.5);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.bezierCurveTo(208, 87, 225, 75, 235, 91);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    /*
    context.beginPath();
    context.ellipse(60, 60, 6.5, 2.5, Math.PI / 1, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    */
    // context.bezierCurveTo(132, 68, 150, 75, 163, 68);
    // //body
    // context.beginPath();
    // context.arc(148, 120, 24, 0, Math.PI * 2, true);
    // context.fillStyle = "white";
    // context.fill();
    // context.closePath();
    // context.beginPath();
    // context.arc(148, 82, 20, 0, Math.PI * 2, true);
    // context.fillStyle = "white";
    // context.fill();
    // context.closePath();
    // context.beginPath();
    // context.arc(148, 55, 16, 0, Math.PI * 2, true);
    // context.fillStyle = "white";
    // context.fill();
    // context.closePath();
    // // hat
    // context.beginPath();
    // context.rect(130, 35, 35, 8);
    // context.fillStyle = "black";
    // context.fill();
    // context.closePath();
    // context.beginPath();
    // context.rect(135, 15, 25, 20);
    // context.fillStyle = "black";
    // context.fill();
    // context.closePath();

    // // scarf
    // context.beginPath();
    // context.bezierCurveTo(132, 68, 150, 75, 163, 68);
    // context.lineWidth = 5;
    // context.strokeStyle = "darkBlue";
    // context.stroke();
    // context.closePath();
    // context.beginPath();
    // context.bezierCurveTo(160, 66, 163, 70, 163, 87);
    // context.lineWidth = 4;
    // context.strokeStyle = "darkRed";
    // context.stroke();
    // context.closePath();

    // // message
    // context.beginPath();
    // context.font = "16px Comic Sans MS";
    // context.fillStyle = "black";
    // context.fillText("Up the Villa!", 10, 57);
    // context.closePath();
  }
  return (
    <div className="App">
      <div className="Halloween">
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

export default Halloween;
