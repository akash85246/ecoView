import React, { useRef, useState, useEffect } from "react";
import "./ImageScanner.css";
import Footer from "../../utils/footer/footer";
import Navbar from "../../utils/navbar/navbar";
import captureButton from "../../assets/button.png";
import changeButton from "../../assets/change.png";
import recaptureButton from "../../assets/again.png";
import focus from "../../assets/focus.png";
import cancelButton from "../../assets/x-button.png";

const ImageScanner = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const switchCamera = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    setSelectedCamera((prevCamera) =>
      prevCamera === null || prevCamera === cameras.length - 1
        ? 0
        : prevCamera + 1
    );
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element is not yet initialized.");
      return;
    }

    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");
    setCapturedImage(imageData); // Save captured image data in state variable
    // console.log(imageData);
  };

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
          deviceId: selectedCamera
            ? { exact: selectedCamera.deviceId }
            : undefined,
        },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      setStream(stream);
    } catch (error) {
      alert("No camera found");
      console.error("Error accessing camera:", error);
    }
  };
  const retry = () => {
    setCapturedImage(null);
    startCamera();
  };
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, [selectedCamera]);

  return (
    <>
      <div className="ScannerPage">
        <Navbar />
        <div className="scanner-container1">
          {capturedImage == null ? (
            <>
              <video ref={videoRef} autoPlay muted></video>
              <div className="focus-box"></div>
              <div className="controls">
                <button onClick={capturePhoto} className="capturePhotoButton">
                  <img
                    src={captureButton}
                    alt="Capture Photo"
                    className="capturePhotoButtonImg"
                  />
                </button>

                <button onClick={switchCamera} className="changeButton">
                  <img
                    src={changeButton}
                    alt="Change Camera"
                    className="changeButtonImg"
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <img src={capturedImage} className="capturedImage"></img>
              <button className="retryButton" onClick={retry}>
                <img src={recaptureButton} className="retryButtonImg"></img>
              </button>
            </>
          )}
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

          <a href="/scanner" className="closeButtonContainer">
            <button className="closeButton">close</button>
          </a>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default ImageScanner;
