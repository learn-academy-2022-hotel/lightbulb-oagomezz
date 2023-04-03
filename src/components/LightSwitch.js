import React, {useState} from "react"
// import lightOff from "./assets/lightOff"
// import lightOn from "./assets/lightOn.png"
// import switchOff from "./assets/switchOff.png"
// import switchOn from "./assets/switchOn.png"

const LightSwitch = (props) => {
  
  const[lightSwitchStatus,setLightSwitchStatus] = useState(false)

    
    const lightsOn = () => {
      setLightSwitchStatus(lightSwitchStatus === false ? true:false)
    }
    let switchOnOff = lightSwitchStatus === true ? 'switchOn': 'switchOff'
    let bulbOn = lightSwitchStatus === true ? 'lightbulbOn': 'lightbulbOff'
     
  return (
    <>
      <div>
        <div  className= {switchOnOff} onClick={lightsOn} ></div> 
        <div onClick= {props.toggleLightSwitch} className={bulbOn} >{props.lightSwitchStatus}</div>  
      </div>
    </>
  )
}
export default LightSwitch
