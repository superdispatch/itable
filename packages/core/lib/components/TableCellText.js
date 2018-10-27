import React from 'react';

import TableCell from './TableCell';

export default ({children, ...rest }) => (
  <TableCell {...rest}>
    <p>{children}</p>
  </TableCell>
);
