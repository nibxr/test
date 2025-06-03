import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import PortValue from '../PortValue';
const { Header, Sider, Content } = Layout;



function ExperimentProcedure1(props) {



    return (
        <div style={{ minHeight: "100vh" }} >

<h2 id="procedure">Procedure</h2>
<p><b>STEP 1</b>: Set up the microcontroller and configure the required pins:
   - Two GPIO pins for control inputs
   - One interrupt pin for count triggering
<br /><br />
<b>STEP 2</b>: Initialize the counter value to 0.
<br /><br />
<b>STEP 3</b>: Implement the interrupt service routine (ISR) for the interrupt pin.
<br /><br />
<b>STEP 4</b>: Set up the main program loop.
<br /><br />
<b>STEP 5</b>: Test the counter with different input combinations.
<br /><br />
<b>STEP 6</b>: Verify the counter's operation and adjust the code if necessary.
<br /><br />
<b>STEP 7</b>: Document the results and analyze the counter's performance.
<br /><br /></p>


        </div>
    );
}

export default ExperimentProcedure1;
