import {
    CopyOutlined,
    FormOutlined,
    CommentOutlined ,
    BulbOutlined,
    BookOutlined,
    
} from '@ant-design/icons';
import FeedbackContent from '../../NavigationComponents/FeedbackComponent';

import Introduction from '../../NavigationComponents/Items/introduction';
import Objective from '../../NavigationComponents/Items/objective';
import experiments from './experiments';
import CourseAlignment from '../../NavigationComponents/Items/Course_Alignment';


export const navitems_experiment = [
    {
        key: '1',
        icon: <CopyOutlined />,
        label: 'Aim',
        heading:'Programming a binary Counter Using 8051 Microcontroller.',
        content:'To display a binary counting pattern on Led’s. Led’s will lit up in binary order. Led’s blinking pattern will be in binary form. Led’s will be connected to port-1 of 8051 microcontroller. The 4 bit binary counter can count from 0 to 15 and 8-bit counter can count from 0 to 255'
    },
    {
        key: '2',
        icon: <FormOutlined />,
        label: 'Theory',
        heading:'Theory',
        content:'To learn and understand the basic concepts of Electronic devices and circuits'
    },
    {
        key: '3',
        icon: <BulbOutlined />,
        label: 'Pretest',
        heading:'Pretest',
        content:'Pretest'
    },
    {
        key: '4',
        icon: <BookOutlined />,
        label: 'Procedure',
        heading:'Procedure',
        content:'Procedure'
    },
    {
        key: '5',
        icon: <CommentOutlined />,
        label: 'Simulation',
        heading:'Simulation - Binary Counter 8051',
        content:'Simulation'
    },
    {
        key: '6',
        icon: <CommentOutlined />,
        label: 'Reference',
        heading:'Reference',
        content:'Reference'
    },
    {
        key: '7',
        icon: <CommentOutlined />,
        label: 'Feedback',
        heading:'Feedback',
        content: <FeedbackContent />,
    },
]