import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter ({
    words: [
        "Hello, My name is Jason Madruga",
        "Guy-who-loves-puzzles.tsx", 
        "<CodesWithPassion />"],
        loop: true,
        delaySpeed: 2300,
        
  });

    return (
    <div>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='purple' />
        </h1>

    </div>
  )
}

export default Hero