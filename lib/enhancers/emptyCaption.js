import React from 'react';

import withTable from './withTable';

const emptyCaptionEnhancer = (Component) => (
  class EmptyCaption extends React.Component {
    componentDidMount() {
      this.props.table.setEmptyCaptionRenderer(
        this.renderEmptyCaption
      );
    }
    renderEmptyCaption = () => {
      const { table, ...props } = this.props;
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