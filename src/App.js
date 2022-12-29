import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState('off')

  // This code block toggles the light switch. It changes the setLightSwitchStatus variable from on to off. 

  const toggleLightSwitch = () => {
    if(lightSwitchStatus === 'off') {setLightSwitchStatus('on')
     } else if (lightSwitchStatus === 'on') {
    setLightSwitchStatus('off')  
     }
    }



  // Does not work on the style for the code. Can't get the bulb to switch colors from white when box is clicked.

  // var bulbColor = () => {
  //   if(lightSwitchStatus === 'off') {
  //    return 'white'
  //   } else if(lightSwitchStatus === 'on') {
  //     return 'yellow'
  //   }
  // }
  return (
    <>
      <h1>Lightbulb Challenge</h1>
      {/* <LightSwitch />
      <LightSwitch />
      <LightSwitch /> */}
      <LightSwitch toggleLightSwitch = {toggleLightSwitch} lightSwitchStatus = {lightSwitchStatus}/>
      
    </>
  )
}

export default App
