import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import PortValue from '../PortValue';
const { Header, Sider, Content } = Layout;



function ExperimentProcedure4(props) {



    return (
        <div style={{ minHeight: "100vh" }} >

<h2 id="procedure">Procedure</h2>
<p><b>STEP 1</b>: Choose an 8-bit maximal length LFSR configuration.
<br /><br />
<b>STEP 2</b>: Set up the 8051 microcontroller.
<br /><br />
<b>STEP 3</b>: Initialize the LFSR.
<br /><br />
<b>STEP 4</b>: Implement the LFSR algorithm in software.
<br /><br />
<b>STEP 5</b>: Output the least significant bit of the LFSR state to a port pin.
<br /><br />
<b>STEP 6</b>: Add a delay between state updates for observable output.
<br /><br />
<b>STEP 7</b>: Program the main loop to continuously generate and output bits.
<br /><br />
<b>STEP 8</b>: Compile and upload the code to the 8051.
<br /><br />
<b>STEP 9</b>: Connect an LED or logic analyzer to the output pin.
<br /><br />
<b>STEP 10</b>: Power up the circuit and observe the generated sequence.
<br /><br />
<b>STEP 11</b>: Verify the sequence properties.
<br /><br /></p>


        </div>
    );
}

export default ExperimentProcedure4;
