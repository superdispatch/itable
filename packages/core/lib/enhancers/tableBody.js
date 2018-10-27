import React from 'react';

import { TableContext } from '../contexts';

export default (Component) => {
  class TableBody extends React.Component {
    render() {
      const { children, forwardedRef, ...rest } = this.props;
      return (
        // TODO temp ref implementation for styled component
        <Component innerRef={forwardedRef} {...rest}>
          <TableContext.Consumer>
            {({ data, emptyCaptionRenderer, }) => (
              data.length === 0 ? emptyCaptionRenderer() : data.map(children)
            )}
          </TableContext.Consumer>
        </Component>
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <TableBody forwardedRef={ref} {...props} />
  ));
};
