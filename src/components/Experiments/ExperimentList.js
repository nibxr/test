import React from 'react';
import { Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import { experiments } from './experiments';

const ExperimentList = () => (
    <List   
        itemLayout="horizontal"
        dataSource={experiments}
        renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<Link to={`/experiment${item.path}`}>{item.title}</Link>}
                    description={item.description}
                />
            </List.Item>
        )}
    />
);

export default ExperimentList;