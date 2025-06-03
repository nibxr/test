import React from 'react';
import { Layout, theme } from 'antd';
import PortValue from '../PortValue';
import ExperimentTheory from './ExperimentTheory';
import ExperimentTheory1 from './theory2';
import ExperimentProcedure from './ExperimentProcedure';
import ExperimentProcedure1 from './ExperimentProcedure2';
import ExperimentProcedure2 from './ExperimentProcedure3';

import ExperimentProcedure3 from './ExperimentProcedure4';

import ExperimentProcedure4 from './ExperimentProcedure5';

import ExperimentReference from './ExperimentReference';
import ExperimentTheory2 from './theory3';
import ExperimentTheory3 from './theory4';
import ExperimentTheory4 from './theory5';
import FeedbackContent from '../../NavigationComponents/FeedbackComponent';

const { Content } = Layout;

function ExperimentBasicComponent(props) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const getTheoryComponent = () => {
        switch(props.experimentId) {
            case 1:
                return <ExperimentTheory />;
            case 2:
                return <ExperimentTheory1 />;
            case 3:
                return <ExperimentTheory2/>;
            case 4:
                return <ExperimentTheory3 />;
            case 5:
                return <ExperimentTheory4 />;
            default:
                return <ExperimentTheory />;
        }
    };

    const getComponent = () => {
        switch(props.content.key) {
            case '1':
            case '3':
            case '7':
                return props.content.content;
            case '2':
                return getTheoryComponent();
            
            case '4':
                return <PortValue />;
            // case '5':
            //     return <ExperimentReference />;
            case '5':
                return <FeedbackContent />;
            default:
                return props.content.content;
        }
    };

    return (
        <div style={{ minHeight: "100vh" }}>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: "100vh",
                    background: colorBgContainer,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                {props.content.heading}
                <div style={{ textAlign: "left", paddingTop: 50 }}>
                    {getComponent()}
                </div>
            </Content>
        </div>
    );
}

export default ExperimentBasicComponent;