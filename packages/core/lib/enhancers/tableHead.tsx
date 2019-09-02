import React from 'react';

import { TableHeadContext, TableHeadContextType } from '../contexts';

type TableHeadProps = {
  onSort?: (sortByKey: string, newSortOrder: 'ASC' | 'DESC') => void
} & Pick<TableHeadContextType, 'sortBy' | 'sortOrder'>

type TableHeadState = TableHeadContextType

export default function <P>(Component: React.ComponentType<P>) {
  return class TableHead extends React.Component<TableHeadProps & P, TableHeadState> {
    constructor(props: TableHeadProps & P) {
      super(props)

      this.state = {
        sortBy: null,
        sortOrder: null,
        handleSort: this.handleSort,
      }
    }

    static getDerivedStateFromProps(props: TableHeadProps & P, state: TableHeadState) {
      if (
        props.sortBy !== state.sortBy ||
        props.sortOrder !== state.sortOrder
      ) {
        return {
          sortBy: props.sortBy,
          sortOrder: props.sortOrder,
        }
      }
      return null
    }

    getCurrentSorOrder = () => {
      const { sortOrder } = this.state
      return (sortOrder === 'ASC') ? 'DESC' : 'ASC'
    }
    handleSort: TableHeadContextType['handleSort'] = (sortByKey) => {
      const { getCurrentSorOrder } = this
      const { sortBy } = this.state
      const { onSort } = this.props
      const newSortOrder = sortBy === sortByKey ? getCurrentSorOrder() : 'ASC'

      if (!onSort) throw new Error('💩 TableHead: I need "onSort" property to handle sorting')

      onSort(sortByKey, newSortOrder)
    }

    render() {
      const state = this.state
      const { onSort, sortBy,  ...rest } = this.props
      return (
        <TableHeadContext.Provider value={state}>
          <Component {...rest as P} />
        </TableHeadContext.Provider>
      )
    }
  }
};
