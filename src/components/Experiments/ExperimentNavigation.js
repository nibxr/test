import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import ExperimentBasicComponent from './ExperimentBasicComponent';
import { experiments } from './experiments';

const { Header, Sider, Content } = Layout;

const ExperimentNavigation = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState('1');
    const [currentExperiment, setCurrentExperiment] = useState(null);
    const { experimentPath } = useParams();

    useEffect(() => {
        const experiment = experiments.find(exp => exp.path === `/${experimentPath}`);
        setCurrentExperiment(experiment);
    }, [experimentPath]);

    const { token: { colorBgContainer } } = theme.useToken();

    if (!currentExperiment) return <div>Experiment not found</div>;

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={currentExperiment.navItems}
                    onClick={(e) => { setSelectedKey(e.key) }}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: '16px', width: 64, height: 64 }}
                    />
                </Header>
                <ExperimentBasicComponent 
                    content={currentExperiment.navItems[parseInt(selectedKey) - 1]} 
                    experimentId={currentExperiment.id}
                />
            </Layout>
        </Layout>
    );
};

export default ExperimentNavigation;