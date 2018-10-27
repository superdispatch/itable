import styled from 'styled-components';

const borderWidth = '1px';

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  
  ${({ isHighlighted, highlightColor }) => isHighlighted && `
    background: ${highlightColor};`
  }
  
  ${({ isBordered }) => isBordered && `
    border: 0 solid #e7ecf0;
    border-bottom-width: ${borderWidth};
  `}
  
  ${({ isHovered }) => isHovered && `
    &:hover {
      background-color: #fbfcfd;
      cursor: pointer;
    }
  `}
`;

TableRow.defaultProps = {
  highlightColor: 'rgba(114, 177, 221, 0.58)'
};

export default TableRow;