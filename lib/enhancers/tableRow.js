import React from 'react';

import withTable from './withTable';
import { TableRowContext } from '../contexts';

const tableRowEnhancer = (Component) => (
  class TableRow extends React.Component {
    state = {

    };
    registerTableDataComponent = () => {

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

export default (Component) => withTable(tableRowEnhancer(Component));