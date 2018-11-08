import React from 'react';

import withTable from './withTable';

const emptyCaptionEnhancer = (Component) => (
  class EmptyCaption extends React.Component {
    componentDidMount() {
      this.props.tableContext.setEmptyCaptionRenderer(
        this.renderEmptyCaption
      );
    }
    renderEmptyCaption = () => {
      const { tableContext, ...props } = this.props;
      return (
        <Component {...props} />
      );
    };
    render() {
      return null;
    }
  }
);

export default (Component) => withTable(emptyCaptionEnhancer(Component));