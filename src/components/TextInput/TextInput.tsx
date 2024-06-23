import { ChangeEvent } from 'react';
import { TextFieldProps } from '@mui/material';
import { StyledTextInput } from './TextInput.styles';

type TextInputProps = TextFieldProps & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({ onChange, ...props }: TextInputProps) => {
  return <StyledTextInput variant="outlined" onChange={onChange} size="small" {...props} />;
};
