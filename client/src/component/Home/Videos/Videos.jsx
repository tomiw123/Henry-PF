import React, { Component } from "react";
import ReactPlayer from "react-player";
import style from './Video.module.css'


const Video = () => {
  return (
    <div className="flex justify-center text-center ">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=A2Ni1WhwnW8&ab_channel=DosDagasFogoneros"
        className="my-10 hover:scale-110 transition duration-300 ease-in-out mr-20"
        width="30%"
      />
      <ReactPlayer
        url="https://www.youtube.com/shorts/J9KS_yKMI-A"
        className="my-10  hover:scale-110 transition duration-300 ease-in-out"
        width="30%"
      />
    </div>
  );
};

export default Video;
