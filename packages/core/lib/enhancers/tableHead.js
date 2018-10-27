import React from 'react';

import { TableHeadContext } from '../contexts';

export default (Component) => (
  class TableHead extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        sortBy: null,
        sortOrder: null,
        handleSort: this.handleSort,
      };
    }
    static getDerivedStateFromProps(props, state) {
      if (
        props.sortBy !== state.sortBy ||
        props.sortOrder !== state.sortOrder
      ) {
        return {
          sortBy: props.sortBy,
          sortOrder: props.sortOrder,
        };
      }
      return null;
    }
    getCurrentSorOrder = () => {
      const { sortOrder } = this.state;
      return (sortOrder === 'ASC') ? 'DESC' : 'ASC';
    };
    handleSort = (sortByKey) => {
      const { getCurrentSorOrder } = this;
      const { sortBy } = this.state;
      const { onSort } = this.props;
      const newSortOrder = sortBy === sortByKey ? getCurrentSorOrder() : 'ASC';

      if (!onSort) throw new Error('💩 TableHead: I need "onSort" property to handle sorting');

      onSort(sortByKey, newSortOrder);
    };
    render() {
      const state = this.state;
      const { onSort, sortBy, ...rest } = this.props;
      return (
        <TableHeadContext.Provider value={state}>
          <Component {...rest} />
        </TableHeadContext.Provider>
      );
    }
  }
);