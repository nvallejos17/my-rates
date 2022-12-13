import { ChangeEventHandler } from 'react';
import { InputGroupWrapper } from './InputGroup.styled';

type IInputGroupProps = {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: number;
};

const InputGroup = ({ label, name, onChange, value }: IInputGroupProps) => {
  return (
    <InputGroupWrapper>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        name={name}
        value={parseFloat(value.toFixed(2))}
        onChange={onChange}
      />
    </InputGroupWrapper>
  );
};

export default InputGroup;
