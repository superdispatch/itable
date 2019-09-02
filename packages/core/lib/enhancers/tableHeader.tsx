import React from 'react';

import SortIcon from '../components/SortIcon';
import withTableHead, { WithTableHeadProps } from './withTableHead';
import withTable, { WithTableProps } from './withTable';

type TableHeaderOwnProps = {
  sortByKey?: string;
  disableSort?: boolean;
  onClick?: (e: React.MouseEvent<any>) => void;
}
type TableHeaderProps = TableHeaderOwnProps  & WithTableHeadProps & WithTableProps

type TableHeaderWrapperProps = { onClick?: (e: React.MouseEvent<any>) => void };

function tableHeader<P extends TableHeaderWrapperProps>(Component: React.ComponentType<P>) {
  return class TableHeader extends React.Component<P & TableHeaderProps> {
    static defaultProps: Partial<TableHeaderProps> = {
      disableSort: false,
    }

    get isSortable() {
      const { disableSort, sortByKey } = this.props

      return disableSort ? false : Boolean(sortByKey)
    }

    componentDidMount() {
      const { tableHeadContext, tableContext, ...rest } = this.props

      if (tableHeadContext) {
        tableContext.registerHeaderProps(rest)
      }
    }

    handleOnClick = (event: React.MouseEvent<any>) => {
      const { isSortable } = this
      const { tableHeadContext, onClick, sortByKey } = this.props

      if (onClick) onClick(event)

      if (isSortable && !event.defaultPrevented) {
        tableHeadContext.handleSort(sortByKey!)
      }
    }

    render() {
      const { handleOnClick, isSortable } = this
      const { onClick, sortByKey, children, tableHeadContext, disableSort, tableContext, ...rest } = this.props
      const props = { onClick: handleOnClick, ...rest  };

      if (!tableHeadContext) {
        return (
          // @ts-ignore
          <Component {...props as P}>
            {children}
          </Component>
        )
      }

      const { sortBy, sortOrder } = tableHeadContext
      return (
        // @ts-ignore
        <Component {...props as P}>
          <>
            {children}
            {isSortable &&
            <SortIcon
              isSorted={sortByKey === sortBy}
              sortOrder={sortOrder}
            />
            }
          </>
        </Component>
      )
    }
  }
}

export default function <P extends TableHeaderWrapperProps>(Component: React.ComponentType<P>): React.ComponentType<TableHeaderOwnProps & Omit<P, keyof TableHeaderWrapperProps>> {
  // @ts-ignore
  return withTable(withTableHead(tableHeader(Component)))
};
