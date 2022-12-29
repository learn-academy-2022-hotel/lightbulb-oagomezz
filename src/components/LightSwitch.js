import React, {useState} from "react"

const LightSwitch = (props) => {
  
  // const[lightSwitchStatus,setLightSwitchStatus] = useState(false)

  //   const lightsOn = () => {
  //     setLightSwitchStatus(lightSwitchStatus === false ? true:false)
  //   }
  //   let switchOnOff = lightSwitchStatus === true ? 'on': 'off'
      // let bulbOn = lightSwitchStatus === true ? 'yellow': 'white'
// changes the color of the lightbulb on the app based on the use state value of the light switch.
      var bulbColor = () => {
          if(props.lightSwitchStatus === 'off') {
           return 'white'
          } else if(props.lightSwitchStatus === 'on') {
            return 'yellow'
          }
        }
  return (
    <>

      {/* Got the box working with the click function could not get the style to change color on request. The style was not changiing with the program I had written. */}
      {/* <div  className= 'lightbulb' onClick={lightsOn} style={{background: bulbOn}}>{switchOnOff}</div>  */}


      <div onClick= {props.toggleLightSwitch} style={{background:bulbColor()}} className="lightbulb" >{props.lightSwitchStatus}</div> 
    </>
  )
}
export default LightSwitch
