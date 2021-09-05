
import React, { useRef } from "react";
import "../darkGrayTheme.css";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from "./meshUtilities";

function Facemesh() {
  const webcamReference = useRef(null);
  const canvasReference = useRef(null);

  const loadFacemesh = async () => {
    const network = await facemesh.load({
      inputResolution: { width: 720, height: 500 },
      scale: 0.8,
    });
    setInterval(() => {
      detectFace(network);
    }, 100);
  };

  const detectFace = async (network) => {
    if (
      typeof webcamReference.current !== "undefined" &&
      webcamReference.current !== null &&
      webcamReference.current.video.readyState === 4
    ) {
      // Getting Video Properties with dimensions
      const video = webcamReference.current.video;
      const videoWidth = webcamReference.current.video.videoWidth;
      const videoHeight = webcamReference.current.video.videoHeight;
      // Setting dimensions of video
      webcamReference.current.video.width = videoWidth;
      webcamReference.current.video.height = videoHeight;
      // Setting dimensions of canvas
      canvasReference.current.width = videoWidth;
      canvasReference.current.height = videoHeight;
      // Detecting the face estimate
      const faceEstimate = await network.estimateFaces(video);
      // console.log(faceEstimate);
      //Get canvas context
      const ctx = canvasReference.current.getContext("2d");
      drawMesh(faceEstimate, ctx);
    }
  };

  loadFacemesh();

  return (
    <div className="App">
        <div id="faceMessage">Please wait afew minutes for the Facemesh to detect your face</div>
      <Webcam id="cam"
        ref={webcamReference}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 720,
          height: 500,
        }}
      />
      <canvas
        ref={canvasReference}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 720,
          height: 500,
        }}
      />
    </div>
  );
  
}

export default Facemesh;
