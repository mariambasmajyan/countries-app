import { TextField } from '@mui/material';
import styled, { css } from 'styled-components';

export const StyledTextInput = styled(TextField)<{ $width?: number }>`
  && {
    margin-bottom: 1rem;

    .MuiInputBase-root {
      ${(props) =>
        props.$width &&
        css`
          width: ${props.$width}px;
        `}

      transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;

      &:hover {
        border-color: #333;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }

      .MuiOutlinedInput-notchedOutline {
        border-color: #e0e0e0;
      }
    }

    .MuiFormLabel-root {
      color: #6c757d;
      font-weight: 500;

      &.Mui-focused {
        color: #495057;
      }
    }
  }
`;
