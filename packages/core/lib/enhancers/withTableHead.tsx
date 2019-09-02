import * as React from 'react';

import { TableHeadContext, TableHeadContextType } from '../contexts';

export type WithTableHeadProps = {
  tableHeadContext: TableHeadContextType
}

function withTableHead<P extends WithTableHeadProps>(Component: React.ReactType<P>): React.ComponentType<Omit<P, keyof WithTableHeadProps>> {
  return (props: Omit<P, keyof WithTableHeadProps>) => {
    return (
      <TableHeadContext.Consumer>
        {(value) => <Component {...props as P} tableHeadContext={value}/>}
      </TableHeadContext.Consumer>
    )
  }
}

export default withTableHead;
