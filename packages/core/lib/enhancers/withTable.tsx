import * as React from 'react';

import { TableContext, TableContextType } from '../contexts';

export type WithTableProps = {
  tableContext: TableContextType;
}

function withTable<P extends WithTableProps>(Component: React.ReactType<P>): React.ComponentType<Omit<P, keyof WithTableProps>> {
  return (props: Omit<P, keyof WithTableProps>) => {
    return (
      <TableContext.Consumer>
        {(value) => <Component {...props as P} tableContext={value}/>}
      </TableContext.Consumer>
    )
  }
}

export default withTable;
