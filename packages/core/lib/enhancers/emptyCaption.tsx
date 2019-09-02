import * as React from 'react';

import withTable, { WithTableProps } from './withTable';

function emptyCaptionEnhancer<P>(Component: React.ReactType<P>) {
  return class EmptyCaption extends React.Component<WithTableProps & P> {
    componentDidMount() {
      this.props.tableContext.setEmptyCaptionRenderer(
        this.renderEmptyCaption,
      )
    }

    renderEmptyCaption = () => {
      const { tableContext, ...props } = this.props
      return (
        <Component {...props as P}  />
      )
    }

    render() {
      return null
    }
  }
}

export default function <P>(Component: React.ComponentType<P>) {
  return withTable(emptyCaptionEnhancer(Component))
};
