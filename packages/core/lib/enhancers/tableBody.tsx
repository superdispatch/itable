import React, { ComponentType, ReactNode } from 'react'

import { TableContext } from '../contexts';

function reactChildrenToArray(children: ReactNode) {
  return Array.isArray(children) ? children : [children];
}

type TableBodyProps = {
  forwardedRef: React.Ref<any>
}

export default function <P>(Component: ComponentType<P>): React.ComponentType<P> {
  class TableBody extends React.Component<TableBodyProps> {
    render() {
      const { children, forwardedRef, ...rest } = this.props
      const arrayChildren = reactChildrenToArray(children)
      return (
        // TODO temp ref implementation for styled component
        <Component ref={forwardedRef} {...rest as P}>
          <TableContext.Consumer>
            {({ data, emptyCaptionRenderer }) => (
              arrayChildren.map((child) => {
                if (typeof child === 'function') {
                  return data.length === 0 ? emptyCaptionRenderer() : data.map(child)
                }
                return child
              })
            )}
          </TableContext.Consumer>
        </Component>
      )
    }
  }

  const Factory = (props: TableBodyProps, ref: React.Ref<any>) => (
    <TableBody forwardedRef={ref} {...props} />
  )

  return React.forwardRef<any, P>(Factory as any)
};
