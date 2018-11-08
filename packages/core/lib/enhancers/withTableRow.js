import React from 'react';

import { TableRowContext } from '../contexts';

const withTableRow = (Component) => (props) => (
  <TableRowContext.Consumer>
    {(value) => <Component {...props} tableRowContext={value}/>}
  </TableRowContext.Consumer>
);

export default withTableRow;