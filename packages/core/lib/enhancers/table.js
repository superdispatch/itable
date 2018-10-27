import React from 'react';

import { TableContext } from '../contexts';

export default (Component) => (
  class Table extends React.Component {
    setEmptyCaptionRenderer = (method) => {
      this.setState({ emptyCaptionRenderer: method });
    };
    state = {
      emptyCaptionRenderer: () => null,
      setEmptyCaptionRenderer: this.setEmptyCaptionRenderer,
    };
    static getDerivedStateFromProps(nextProps, state) {
      if (
        nextProps.data !== state.data
      ) {
        return { data: nextProps.data };
      }
      return null;
    }
    render() {
      const state = this.state;
      const { data, ...rest } = this.props;
      return (
        <TableContext.Provider value={state}>
          <Component {...rest}/>
        </TableContext.Provider>
      );
    }
  }
);