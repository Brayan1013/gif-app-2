import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Loading = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 250, color: 'gray' }} spin />
    return (
        <div className="loading-container">
            <Spin indicator={antIcon} />
        </div>
    )
}
