import styled from 'styled-components';

const borderWidth = '1px';
const roundWidth = '4px';

export default styled.div`
  border: 0 solid #e7ecf0;
  height: 100%;
  overflow: hidden;
  ${({ isVerticalBorders }) => isVerticalBorders && `
   .cell:not(:last-child) {
      border: 0 solid #e7ecf0;
       border-right-width: ${'1px' /*borderWidth*/};
    }
  `}
  
  ${({ isHorizontalBorders }) => isHorizontalBorders && `
    .table-header .row, .table-content .row:not(:last-child) {
      border: 0 solid #e7ecf0;
      border-bottom-width: ${'1px' /*borderWidth*/};
    }
    :global(.table-content) {
      margin-top: ${'1px' /*borderWidth*/};
    }
  `}
  &.side-border-left {
    border-left-width: ${borderWidth};
  }
  &.side-border-right {
    border-right-width: ${borderWidth};
  }
  &.side-border-top {
    border-top-width: ${borderWidth};
  }
  &.side-border-bottom {
    border-bottom-width: ${borderWidth};
  }
  &.side-round-left {
    border-top-left-radius: ${roundWidth};
    border-bottom-left-radius: ${roundWidth};
  }
  &.side-round-right {
    border-top-right-radius: ${roundWidth};
    border-bottom-right-radius: ${roundWidth};
  }
  &.side-round-top {
    border-top-left-radius: ${roundWidth};
    border-top-right-radius: ${roundWidth};
  }
  &.side-round-bottom {
    border-bottom-left-radius: ${roundWidth};
    border-bottom-right-radius: ${roundWidth};
  }
`;