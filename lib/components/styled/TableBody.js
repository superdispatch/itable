import styled from 'styled-components';

import TableContent from '../TableBody';

export default styled(TableContent)`
  margin-top: 1px;
  background-color: ${'#ffffff' /*contentBackground*/};
  overflow-y: auto;
  height: calc(100% - 50px);
`;