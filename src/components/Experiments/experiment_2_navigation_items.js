import {
    CopyOutlined,
    FormOutlined,
    CommentOutlined ,
    BulbOutlined,
    BookOutlined,
    
} from '@ant-design/icons';

import FeedbackContent from '../../NavigationComponents/FeedbackComponent';


export const navitems_experiment = [
    {
        key: '1',
        icon: <CopyOutlined />,
        label: 'Aim',
        heading:'Implementation of UP/DOWN counter using following input specification',
        content:'Two General Purpose I/O Pins as Control ,Inputs One Interrupt Pin as a Control Pin'
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
        heading: 'Feedback',
        content: <FeedbackContent />,
      },
    {
        key: '8',
        icon: <CommentOutlined />,
        label: <button onClick={() => window.location.href = 'http://localhost:3006/'}>Go Back</button>,
        content: <button onClick={() => window.location.href = 'http://localhost:3006/'}>Go Back</button>,
    },
]