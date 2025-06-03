## ExperimentProcedure3.js

```jsx
import React from 'react';
import { Layout } from 'antd';
import PortValue from '../PortValue';
const { Header, Sider, Content } = Layout;

function ExperimentProcedure3(props) {
    return (
        <div style={{ minHeight: "100vh" }} >
            <h2 id="procedure">Procedure</h2>
            <p><b>STEP 1</b>: Connect the ADC to the 8051:
               - ADC data pins to Port 1 of 8051
               - ADC control pins (CS, RD, WR) to Port 3 pins
            <br /><br />
            <b>STEP 2</b>: Connect seven-segment displays to available port pins (e.g., Port 2)
            <br /><br />
            <b>STEP 3</b>: Program the 8051.
            <br /><br />
            <b>STEP 4</b>: Compile and upload the code to the 8051.
            <br /><br />
            <b>STEP 5</b>: Apply analog input to the ADC.
            <br /><br />
            <b>STEP 6</b>: Power up the circuit and observe the displayed value.
            <br /><br />
            <b>STEP 7</b>: Test with different analog inputs to verify operation.
            <br /><br />
            <b>STEP 8</b>: Calibrate if necessary for improved accuracy.
            <br /><br /></p>
        </div>
    );
}

export default ExperimentProcedure3;
