import React from 'react';
import { Card, Row, Col, Tooltip } from 'antd';

const PortColour = (props) => {
    const portColors = {
        output: '#52c41a', // Green
        input: '#f5222d', // Red
        special: '#faad14', // Yellow
        unused: '#d9d9d9', // Light Gray
    };

    const cellStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid #ccc',
        margin: '2px',
        textAlign: 'center',
        lineHeight: '30px',
        fontWeight: 'bold',
    };

    const getPortColor = (port, index) => {
        return props[port][index] ? portColors.output : portColors.unused;
    };

    const getPortTooltip = (port, index) => {
        const portValue = props[port][index] ? '1' : '0';
        const portState = props[port][index] ? 'Output' : 'Unused';
        return `${port}.${index}: ${portValue} (${portState})`;
    };

    return (
        <Row gutter={[16, 16]}>
            {Object.keys(props).map((port) => (
                <Col key={port} span={6}>
                    <Card title={port} style={{ textAlign: 'center' }}>
                        {props[port].map((value, index) => (
                            <Tooltip key={`${port}-${index}`} title={getPortTooltip(port, index)}>
                                <div
                                    style={{
                                        ...cellStyle,
                                        backgroundColor: getPortColor(port, index),
                                    }}
                                />
                            </Tooltip>
                        ))}
                    </Card>
                </Col>
            ))}
            <Col span={24}>
                <Card title="Legend" style={{ marginTop: '16px' }}>
                    <Row gutter={[16, 16]}>
                        <Col span={6}>
                            <div>
                                <div style={{ ...cellStyle, backgroundColor: portColors.output }} />
                                <span style={{ marginLeft: '8px' }}>Output port</span>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <div style={{ ...cellStyle, backgroundColor: portColors.input }} />
                                <span style={{ marginLeft: '8px' }}>Input port</span>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <div style={{ ...cellStyle, backgroundColor: portColors.special }} />
                                <span style={{ marginLeft: '8px' }}>Specific value (e.g., interrupt vector)</span>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <div style={{ ...cellStyle, backgroundColor: portColors.unused }} />
                                <span style={{ marginLeft: '8px' }}>Unused port</span>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
};

export default PortColour;