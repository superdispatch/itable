import styled from 'styled-components';

export default styled.div`
  ${
  /*
  * Ugly workaround for old usage compatibility
  * */
  ({ flex = true, width }) => flex && !width && `
      flex: 1;
    `
  }
  ${({ width }) => width && `
    width: ${width}px;
  `}
  
  ${({ verticalBorder }) => verticalBorder && `
    &:not(:last-child) {
      border: 0 solid #e7ecf0;
      border-right-width: ${borderWidth};
    }
  `}
  
  padding-left: 25px;
  padding-right: 15px;
  
  
`;
