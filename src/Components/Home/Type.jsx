import React from 'react';
import Typewriter from 'typewriter-effect';


export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Website Developer",
          "Game Developer",
          "Graphic Design"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}
