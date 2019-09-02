import React from 'react';

import { TableContext, TableContextType } from '../contexts';

type TableState = TableContextType;

type TableProps = {
  data: any;
}

export default function table<P>(Component: React.ComponentType<P>) {
  return (
    class Table extends React.Component<TableProps & P, TableState> {
      setEmptyCaptionRenderer: TableContextType['setEmptyCaptionRenderer'] = (method) => {
        this.setState({ emptyCaptionRenderer: method })
      }
      registerHeaderProps: TableContextType['registerHeaderProps'] = (props) => {
        this.setState(({ headerProps }) => ({
          headerProps: headerProps.concat(props),
        }))
      }
      state = {
        data: null,
        headerProps: [],
        registerHeaderProps: this.registerHeaderProps,
        emptyCaptionRenderer: () => null,
        setEmptyCaptionRenderer: this.setEmptyCaptionRenderer,
      }

      static getDerivedStateFromProps(nextProps: TableProps, state: TableState): Partial<TableState> | null {
        if (
          nextProps.data !== state.data
        ) {
          return { data: nextProps.data }
        }
        return null
      }

      render() {
        const state = this.state
        const { data, ...rest } = this.props
        return (
          <TableContext.Provider value={state}>
            <Component {...rest as P}/>
          </TableContext.Provider>
        )
      }
    }
  )
}
