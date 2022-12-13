import React, { Component } from 'react'
import ReactPlayer from 'react-player'



const Video = () => {



    return (
      <div className='flex justify-around text-center '>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=A2Ni1WhwnW8&ab_channel=DosDagasFogoneros'
        //   className='react-player'
          className=" my-10 w-full h-80   min-h-max hover:scale-110 transition duration-300 ease-in-out"
          //playing
        //   width='100%'
        //   height='100%'
        />
        <ReactPlayer
          url='https://www.youtube.com/shorts/J9KS_yKMI-A'
        //   className='react-player'
          className=" my-10 w-full h-80  min-h-max hover:scale-110 transition duration-300 ease-in-out"
         // playing
        //   width='100%'
        //   height='100%'
        />
      </div>
    );
  }


export default Video
