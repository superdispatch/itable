import React from 'react';

import withTable from './withTable';
import { TableContext } from '../contexts';

const tableDataEnhancer = (Component) => (
  class TableRow extends React.Component {
    state = {

    };
    registerTableDataComponent = () => {

    };
    render() {
      const state = this.state;
      const props = this.props;
      return (
        <TableContext.Provider value={state}>
          <Component {...props}/>
        </TableContext.Provider>
      );
    }
  }
);

export default (Component) => withTable(tableDataEnhancer(Component));