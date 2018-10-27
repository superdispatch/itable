import React from 'react';
import styled from 'styled-components';

const Placeholder = styled.p`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #F1F4F7;
  border-radius: 5px;
  
  /*
  @keyframes loading {
    0%, 100% {
      width: 85%;
    }
    50% {
      width: 75%;
    }
  }
  */
`;

Placeholder.defaultProps = {
  width: '85%',
  height: '8px',
};

export default Placeholder;