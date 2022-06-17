import { useState } from "react";
import ControlledInput from "./ControlledInput";
import Display from "./Display";
import Setter from "./Setter";

const Manager = () => {

    const[stateValue, setStateValue] = useState("");

    return ( 
        <>
            {/* <Setter setData={setStateValue}/> */}
            <ControlledInput setData={setStateValue}/>
            <Display data={stateValue}/>
        </>
     );
}
 
export default Manager;