import * as React from 'react';

import { TableRowContext, TableRowContextType } from '../contexts';

export type WithTableRowProps = { tableRowContext: TableRowContextType }

function withTableRow<P extends WithTableRowProps>(Component: React.ReactType<P>) {
  return (props: Omit<P, keyof WithTableRowProps>) => {
    return (
      <TableRowContext.Consumer>
        {(value) => <Component {...props as P} tableRowContext={value}/>}
      </TableRowContext.Consumer>
    )
  }
}

export default withTableRow;
