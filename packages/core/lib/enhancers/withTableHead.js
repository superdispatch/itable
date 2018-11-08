import React from 'react';

import { TableHeadContext } from '../contexts';

const withTableHead = (Component) => (props) => (
  <TableHeadContext.Consumer>
    {(value) => <Component {...props} tableHeadContext={value}/>}
  </TableHeadContext.Consumer>
);

export default withTableHead;