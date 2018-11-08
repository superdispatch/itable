import React from 'react';

import { TableRowContext } from '../contexts';

function random() {
    return Math.random().toString(16).substr(2, 10);
}

const tableRowEnhancer = (Component) => (
  class TableRow extends React.Component {
      rowDataList = [];
    registerTableDataComponentIndex = (callback) => {
        const uid = random();
        this.rowDataList.push(uid);
        callback(this.rowDataList.indexOf(uid));
    };
      state = {
          registerTableDataComponentIndex: this.registerTableDataComponentIndex,
      };
    componentDidMount() {

    }
    render() {
      const state = this.state;
      const props = this.props;
      return (
        <TableRowContext.Provider value={state}>
          <Component {...props}/>
        </TableRowContext.Provider>
      );
    }
  }
);

export default (Component) => tableRowEnhancer(Component);