import React from 'react';

import TableRow from '../TableRow';
import TableCell from '../TableCell';
import TableBody from './TableBody';

export default ({ children }) => (
  <TableBody>
    <TableRow>
      <TableCell>
        {children}
      </TableCell>
    </TableRow>
  </TableBody>
);