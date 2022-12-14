import React, { Component } from 'react'
import ReactPlayer from 'react-player'




const Video = () => {



    return (
      <div className='flex justify-center text-center '>

        <ReactPlayer
          
          url='https://www.youtube.com/watch?v=A2Ni1WhwnW8&ab_channel=DosDagasFogoneros'
          className="my-10 min-h-max hover:scale-110 transition duration-300 ease-in-out"
        />

        <ReactPlayer
          url='https://www.youtube.com/shorts/J9KS_yKMI-A'
          // className=" my-10 min-h-max hover:scale-110 transition duration-300 ease-in-out "
          className="my-10 min-h-max hover:scale-110 transition duration-300 ease-in-out "
        />
      </div>
    );
  }


export default Video
