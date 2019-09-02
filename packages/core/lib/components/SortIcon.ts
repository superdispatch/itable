import styled from 'styled-components';

const SortIcon = styled.div<{ isSorted: boolean, sortOrder: 'ASC' | 'DESC'}>`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
    
  &:before, &:after {
    content: "";
    display: block;
    margin: 5px;
    border: solid transparent;
    border-width: 3px 4px;
    border-right-color: #979CA4;
  }
  
  &:before {
    transform: rotate(90deg);
  }
  
  &:after {
    transform: rotate(-90deg);
  }
  
  ${({ isSorted, sortOrder }) => isSorted && `
    ${sortOrder === 'ASC' ? `
      &:before {
        margin-top: 4px;
        border-width: 4px 5px;
        border-right-color: #2F394A;
      }
    ` : `
      &:after {
        margin-bottom: 4px;
        border-width: 4px 5px;
        border-right-color: #2F394A;
      }
    `}
  `}
`;

export default SortIcon;
