import React from 'react';

import withTableRow from './withTableRow';
import withTable from './withTable';

const tableDataEnhancer = (Component) => (
  class TableRow extends React.Component {
  tableRow;
    state = {
        index: null,
    };
    componentDidMount() {
        this.props.tableRowContext.registerTableDataComponentIndex(this.registerTableDataCallback);
    }
    registerTableDataCallback = (index) => {
        this.setState({ index });
    };
    get sharedPropsFromHeader() {
        const { index } = this.state;
        const { tableContext } = this.props;

        if (typeof index === 'number' && tableContext.headerProps[index]) {
            const { width } = tableContext.headerProps[index];

            return { width };
        }
        return {};
    }
    render() {
      const props = this.props;
      const sharedPropsFromHeader = this.sharedPropsFromHeader;
      return (
          <Component {...sharedPropsFromHeader} {...props}/>
      );
    }
  }
);

export default (Component) => withTable(withTableRow(tableDataEnhancer(Component)));