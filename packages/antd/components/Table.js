import React from 'react';
import { Table as AntTable } from 'antd';

class Table extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                {children}
                <AntTable />
            </React.Fragment>
        );
    }
}