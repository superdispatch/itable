import React from 'react';

import { TableContext } from '../contexts';

function reactChildrenToArray(children) {
  return Array.isArray(children) ? children : [children];
}

export default (Component) => {
  class TableBody extends React.Component {
    render() {
      const { children, forwardedRef, ...rest } = this.props;
      const arrayChildren = reactChildrenToArray(children);
      return (
        // TODO temp ref implementation for styled component
        <Component innerRef={forwardedRef} {...rest}>
          <TableContext.Consumer>
            {({ data, emptyCaptionRenderer, }) => (
                arrayChildren.map((child) => {
                  if (typeof child === 'function') {
                    return data.length === 0 ? emptyCaptionRenderer() : data.map(child);
                  }
                  return child;
                })
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
