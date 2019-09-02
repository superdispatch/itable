import * as React from 'react';

import { TableRowContext, TableRowContextType } from '../contexts'

function random(): string {
    return Math.random().toString(16).substr(2, 10);
}

function tableRowEnhancer<P>(Component: React.ReactType<P>) {
  return class TableRow extends React.Component<P, TableRowContextType> {
    rowDataList: string[] = []
    registerTableDataComponentIndex: TableRowContextType['registerTableDataComponentIndex'] = (callback) => {
      const uid = random()
      this.rowDataList.push(uid)
      callback(this.rowDataList.indexOf(uid))
    }
    state = {
      registerTableDataComponentIndex: this.registerTableDataComponentIndex,
    }
    render() {
      const state = this.state
      const props = this.props
      return (
        <TableRowContext.Provider value={state}>
          <Component {...props}/>
        </TableRowContext.Provider>
      )
    }
  }
}

export default function <P>(Component: React.ReactType<P>) {
  return tableRowEnhancer(Component)
};
