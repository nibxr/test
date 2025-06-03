import {
    CopyOutlined,
    FormOutlined,
    CommentOutlined ,
    BulbOutlined,
    BookOutlined,
    
} from '@ant-design/icons';

import FeedbackContent from './FeedbackComponent';

import Introduction from './Items/introduction';
import Objective from './Items/objective';
import experiments from '../components/Experiments/experiments';
import CourseAlignment from './Items/Course_Alignment';




export const navitems = [
    {
        key: '1',
        icon: <CopyOutlined />,
        label: 'Introduction',
        content: <Introduction />,
    },
    {
        key: '2',
        icon: <FormOutlined />,
        label: 'Objective',
        content: <Objective />,
    },
    {
        key: '3',
        icon: <BulbOutlined />,
        label: 'List of Expriments',
        content: <experiments />,
    },
    {
        key: '4',
        icon: <BookOutlined />,
        label: 'Course Alignment',
        content: <CourseAlignment />,

    },
    {
        key: '5',
        icon: <CommentOutlined />,
        label: 'Feedback',
        heading: 'Feedback',
        content: <FeedbackContent />,
      },
]