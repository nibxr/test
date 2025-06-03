import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import PortValue from '../PortValue';
const { Header, Sider, Content } = Layout;



function ExperimentReference(props) {



    return (
        <div style={{ minHeight: "100vh" }} >

            <h2 id="references">References</h2>
            <ol>
                <li>D. Roy Choudhury and Shail B.Jain, “Linear Integrated Circuits”, New Age International (p) Ltd, Second Edition, 2003.<br /></li>
                <li>Sergio Franco, “Design with Operational Amplifier and Analog Integrated Circuits”, TMH, Fourth Edition, 2011.<br /></li>
                <li>Boylestad, Nashelsky, “Electronic Devices and Circuit Theory”, Pearson Education India, 11 Edition, 2015.<br /></li>
            </ol>



        </div>
    );
}

export default ExperimentReference;
