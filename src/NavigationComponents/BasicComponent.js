import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import ExperimentList from '../components/Experiments/ExperimentList';
const { Header, Sider, Content } = Layout;


function BasicComponent(props) {


    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <div style={{ minHeight: "100vh" }} >


            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: "100vh",
                    background: colorBgContainer,
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    justifyContent: "flex", // Align content at the top
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100%", // Set the width to 100% to span the full width
                }}
            >
                {props.content.heading}


          

                <div style={{ textAlign: "left" , paddingTop:50}}>
                {props.content.key !=3 ? <>{props.content.content}</> :<ExperimentList />}
                </div>

            </Content>



        </div>
    );
}

export default BasicComponent;
