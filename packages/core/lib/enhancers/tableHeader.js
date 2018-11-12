import React from 'react';

import SortIcon from '../components/SortIcon';
import withTableHead from './withTableHead';
import withTable from './withTable';

const tableHeader = (Component) => (
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
      const { tableHeadContext, tableContext, ...rest } = this.props;

      if (tableHeadContext) {
          tableContext.registerHeaderProps(rest);
      }
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
      const { onClick, sortByKey, children, tableHeadContext, ...rest } = this.props;

      if (!tableHeadContext) {
        return (
          <Component
              onClick={handleOnClick}
              {...rest}
          >
              {children}
          </Component>
        );
      }

      const { sortBy, sortOrder } = tableHeadContext;
      return (
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
      );
    }
  }
);

export default (Component) => withTable(withTableHead(tableHeader(Component)));
