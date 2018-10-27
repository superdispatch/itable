import React from 'react';

import { TableHeadContext } from '../contexts';
import SortIcon from '../components/SortIcon';

export default (Component) => (
  class TableHeader extends React.Component {
    /* reference for TableHeadContext value */
    tableHeadContextValue;

    static defaultProps = {
      sortByKey: null,
      disableSort: false,
    };
    get isSortable() {
      const { disableSort, sortByKey } = this.props;

      return disableSort ? false : Boolean(sortByKey);
    }
    componentDidMount() {
      const { tableHeadContextValue } = this;

      if (!tableHeadContextValue)
        throw new Error('TableHeader: There must be TableHeadContext above me 🔝');
    }
    handleOnClick = (event) => {
      const { tableHeadContextValue, isSortable } = this;
      const { onClick, sortByKey } = this.props;

      if (onClick) onClick(event);

      if (isSortable && !event.defaultPrevented) {
        tableHeadContextValue.handleSort(sortByKey);
      }
    };
    render() {
      const { handleOnClick, isSortable } = this;
      const { onClick, sortByKey, children, ...rest } = this.props;
      return (
        <TableHeadContext.Consumer>
          {(value) => (
            this.tableHeadContextValue = value,
              (({ sortBy, sortOrder }) => (
                <Component
                  onClick={handleOnClick}
                  {...rest}
                >
                  {children}
                  {isSortable &&
                    <SortIcon
                      isSorted={sortByKey === sortBy}
                      sortOrder={sortOrder}
                    />
                  }
                </Component>
              ))(value)
          )}
        </TableHeadContext.Consumer>
      );
    }
  }
);
