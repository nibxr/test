import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, Button, theme, Flex } from 'antd';
import BasicComponent from '../NavigationComponents/BasicComponent';
import { navitems } from '../NavigationComponents/NavigationItems';

const { Header, Sider, Content } = Layout;

const Navigation = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState(1);

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={navitems}
                    onClick={(e) => { setSelectedKey((prev) => e.key) }}
                />
            </Sider>
            <Layout>

                <Header

                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Flex gap="small" wrap="wrap">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        >

                        </Button>
                        <h2 style={{ textAlign: "center",paddingLeft:550,paddingBottom:50 }}> Virtual Lab</h2>
                    </Flex>
                </Header>


                <BasicComponent content={navitems[selectedKey - 1]} />


            </Layout>
        </Layout>
    );
};



export default Navigation;