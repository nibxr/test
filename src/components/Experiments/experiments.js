import React from 'react';
import {
    CopyOutlined,
    FormOutlined,
    CommentOutlined,
    BulbOutlined,
    BookOutlined,
} from '@ant-design/icons';
import FeedbackContent from '../../NavigationComponents/FeedbackComponent';
import ExperimentTheory from './ExperimentTheory';
import ExperimentProcedure from './ExperimentProcedure';
import ExperimentProcedure1 from './ExperimentProcedure2';
import ExperimentProcedure2 from './ExperimentProcedure3';
import ExperimentProcedure3 from './ExperimentProcedure4';
import ExperimentProcedure4 from './ExperimentProcedure5';
import ExperimentReference from './ExperimentReference';
import PortValue from '../PortValue';
import ExperimentTheory1 from './theory2';
import ExperimentTheory2 from './theory3';
import ExperimentBasicComponent from './ExperimentBasicComponent';

export const experiments = [
    {
        id: 1,
        title: 'Binary Counter Using 8051 Microcontroller',
        description: 'Experiment on binary counter 8051',
        path: '/binary-counter',
        navItems: [
            {
                key: '1',
                icon: <CopyOutlined />,
                label: 'Aim',
                heading: 'Programming a binary Counter Using 8051 Microcontroller.',
                content: 'To display a binary counting pattern on LED\'s. LED\'s will light up in binary order. LED\'s blinking pattern will be in binary form. LED\'s will be connected to port-1 of 8051 microcontroller. The 4-bit binary counter can count from 0 to 15 and 8-bit counter can count from 0 to 255.'
            },
            {
                key: '2',
                icon: <FormOutlined />,
                label: 'Theory',
                heading: 'Theory',
                content: <ExperimentTheory1 />
            },
            
            {
                key: '3',
                icon: <BookOutlined />,
                label: 'Procedure',
                heading: 'Procedure',
                content: <ExperimentProcedure />
            },
            {
                key: '4',
                icon: <CommentOutlined />,
                label: 'Simulation',
                heading: 'Simulation - Binary Counter 8051',
                content: <PortValue />
            },
            {
                key: '5',
                icon: <CommentOutlined />,
                label: 'Reference',
                heading: 'Reference',
                content: <ExperimentReference />
            },
            {
                key: '6',
                icon: <CommentOutlined />,
                label: 'Feedback',
                heading: 'Feedback',
                content: <FeedbackContent />
            },
        ]
    },
    {
        id: 2,
        title: 'UP/DOWN Counter Design',
        description: 'Design and implement an UP/DOWN counter',
        path: '/up-down-counter',
        navItems: [
            {
                key: '1',
                icon: <CopyOutlined />,
                label: 'Aim',
                heading: 'Implementation of UP/DOWN counter using following input specification Two General Purpose I/O Pins as Control Inputs,One Interrupt Pin as a Control Pin',
                content: 'To design and implement an UP/DOWN counter using two General Purpose I/O (GPIO) pins as control inputs and one interrupt pin as a control pin.'
            },
            {
                key: '2',
                icon: <FormOutlined />,
                label: 'Theory',
                heading: 'Theory',
                content: 'theory2'
            },
            {
                key: '3',
                icon: <BookOutlined />,
                label: 'Procedure',
                heading: 'Procedure',
                content: <ExperimentProcedure1 />
            },
            {
                key: '4',
                icon: <CommentOutlined />,
                label: 'Simulation',
                heading: 'Simulation - Binary Counter 8051',
                content: <PortValue />
            },
            {
                key: '5',
                icon: <CommentOutlined />,
                label: 'Feedback',
                heading: 'Feedback',
                content: <FeedbackContent />
            },
        ]
    },
    {
        id: 3,
        title: 'DAC Interface with 8051',
        description: 'Interface a DAC with an 8051 microcontroller',
        path: '/dac-interface',
        navItems: [
            {
                key: '1',
                icon: <CopyOutlined />,
                label: 'Aim',
                heading: 'Interface a DAC with an 8051 Microcontroller',
                content: 'To interface a Digital-to-Analog Converter (DAC) with an 8051 microcontroller and generate analog signals.'
            },
            {
                key: '2',
                icon: <FormOutlined />,
                label: 'Theory',
                heading: 'Theory',
                content: 'theory3'
            },
            {
                key: '3',
                icon: <BookOutlined />,
                label: 'Procedure',
                heading: 'Procedure',
                content: <ExperimentProcedure2 />
            },
            {
                key: '4',
                icon: <CommentOutlined />,
                label: 'Simulation',
                heading: 'Simulation - Binary Counter 8051',
                content: <PortValue />
            },
            {
                key: '5',
                icon: <CommentOutlined />,
                label: 'Feedback',
                heading: 'Feedback',
                content: <FeedbackContent />
            },
            
        ]
    },
    {
        id: 4,
        title: 'ADC Interface',
        description: 'Interface an Analog-to-Digital Converter',
        path: '/adc-interface',
        navItems: [
            {
                key: '1',
                icon: <CopyOutlined />,
                label: 'Aim',
                heading: 'Interface an Analog-to-Digital Converter',
                content: 'To interface an Analog-to-Digital Converter (ADC) with a microcontroller and perform analog-to-digital conversion.'
            },
            {
                key: '2',
                icon: <FormOutlined />,
                label: 'Theory',
                heading: 'Theory',
                content: 'theory4'
            },
            {
                key: '3',
                icon: <BookOutlined />,
                label: 'Procedure',
                heading: 'Procedure',
                content: <ExperimentProcedure3 />
            },
            {
                key: '4',
                icon: <CommentOutlined />,
                label: 'Simulation',
                heading: 'Simulation - Binary Counter 8051',
                content: <PortValue />
            },
            {
                key: '5',
                icon: <CommentOutlined />,
                label: 'Feedback',
                heading: 'Feedback',
                content: <FeedbackContent />
            },
            
        ]
    },
    {
        id: 5,
        title: '8-bit Pseudo-Noise Generator',
        description: 'Design and implement an 8-bit Pseudo-Noise Generator',
        path: '/pseudo-noise-generator',
        navItems: [
            {
                key: '1',
                icon: <CopyOutlined />,
                label: 'Aim',
                heading: 'Design and Implement an 8-bit Pseudo-Noise Generator',
                content: 'To design and implement an 8-bit Pseudo-Noise Generator using a microcontroller.'
            },
            {
                key: '2',
                icon: <FormOutlined />,
                label: 'Theory',
                heading: 'Theory',
                content: 'theory5'
            },
            {
                key: '3',
                icon: <BookOutlined />,
                label: 'Procedure',
                heading: 'Procedure',
                content: <ExperimentProcedure4 />
            },
            {
                key: '4',
                icon: <CommentOutlined />,
                label: 'Simulation',
                heading: 'Simulation - Binary Counter 8051',
                content: <PortValue />
            },
            {
                key: '5',
                icon: <CommentOutlined />,
                label: 'Feedback',
                heading: 'Feedback',
                content: <FeedbackContent />
            },
            
        ]
    }
];