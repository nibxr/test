## ExperimentProcedure2.js

```jsx
import React from 'react';
import { Layout } from 'antd';
import PortValue from '../PortValue';
const { Header, Sider, Content } = Layout;

function ExperimentProcedure2(props) {
    return (
        <div style={{ minHeight: "100vh" }} >
            <h2 id="procedure">Procedure</h2>
            <p><b>STEP 1</b>: Connect the DAC to the 8051:
               - Connect DAC data inputs to 8051 Port 1
               - Connect DAC control signals (WR, CS) to 8051 Port 3 pins
            <br /><br />
            <b>STEP 2</b>: Set up the op-amp as a buffer for the DAC output.
            <br /><br />
            <b>STEP 3</b>: Program the 8051.
            <br /><br />
            <b>STEP 4</b>: Compile and upload the code to the 8051.
            <br /><br />
            <b>STEP 5</b>: Power up the circuit and observe the ramp output on an oscilloscope.
            <br /><br />
            <b>STEP 6</b>: Adjust the code to modify ramp characteristics if needed.
            <br /><br /></p>
        </div>
    );
}

export default ExperimentProcedure2;
