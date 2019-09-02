import React from 'react';

import withTableRow, { WithTableRowProps } from './withTableRow';
import withTable, { WithTableProps } from './withTable';

type TableDataProps = WithTableProps & WithTableRowProps

type TableRowState = {
  index: null | number
}

type TableDataEnhancerProps = { width?: number };

function tableDataEnhancer<P extends TableDataEnhancerProps>(Component: React.ComponentType<P>) {
  return class TableRow extends React.Component<TableDataProps & Omit<P, keyof TableDataEnhancerProps>, TableRowState> {
    state: TableRowState = {
      index: null,
    }

    componentDidMount() {
      this.props.tableRowContext.registerTableDataComponentIndex(this.registerTableDataCallback)
    }

    registerTableDataCallback = (index: number) => {
      this.setState({ index })
    }

    get sharedPropsFromHeader(): { width?: number } {
      const { index } = this.state
      const { tableContext } = this.props

      if (typeof index === 'number' && tableContext.headerProps[ index ]) {
        const { width } = tableContext.headerProps[ index ]

        return { width }
      }
      return {}
    }

    render() {
      const props = this.props
      const sharedPropsFromHeader = this.sharedPropsFromHeader
      return (
        <Component {...sharedPropsFromHeader as P} {...props}/>
      )
    }
  }
}

export default function <P extends TableDataEnhancerProps>(Component: React.ComponentType<P>) {
  return withTable(withTableRow(tableDataEnhancer(Component)))
};
