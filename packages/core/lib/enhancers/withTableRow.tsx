import React from 'react';

import { TableRowContext, TableRowContextType } from '../contexts';

export type WithTableRowProps = { tableRowContext: TableRowContextType }

function withTableRow<P extends WithTableRowProps>(Component: React.ComponentType<P>) {
  return (props: Omit<P, keyof WithTableRowProps>) => {
    return (
      <TableRowContext.Consumer>
        {(value) => <Component {...props as P} tableRowContext={value}/>}
      </TableRowContext.Consumer>
    )
  }
}

export default withTableRow;
