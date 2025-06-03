import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import PortValue from '../PortValue';
const { Header, Sider, Content } = Layout;



function ExperimentProcedure(props) {



    return (
        <div style={{ minHeight: "100vh" }} >

            <h2 id="procedure">Procedure</h2>
            <p><b>STEP 1</b>: Connect the components as mentioned:
                (1-3), (2-4), (5-7), (6-8).
                <br />
                <br />
                <b>S TEP 2</b>: Click on <b>&#39;Check&#39;</b> button to check the connections. If connected connections are wrong, Make the right connection as per given instruction.
                <br /><br />
                <b>STEP 3</b>: If connections are right, Click on the<b>&#39;Start&#39;</b> button to perform the experiment.<br /><br />
                <b>STEP 4</b>: Toggle On/Off button to control the power to the system.<br /><br />
                <b>STEP 5</b>: Move the <b>&#39;Voltage&#39;</b> range slider to fetch values into table.<br /><br />
                <b>STEP 6</b>: Click on <b>&#39;Plot&#39;</b> button to plot the graph.<br /><br /></p>



        </div>
    );
}

export default ExperimentProcedure;
