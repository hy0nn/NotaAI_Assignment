import React, { useEffect, useState } from 'react';
import { CustomTextFieldProps } from '../../../interfaces/interfaces';
import { Container, Input } from './CustomTextFieldStyles';

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  valueR,
  placeholder,
  onChange,
  isEditMode,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 100) {
      setValue(newValue);
      if (onChange) {
        onChange(e);
      }
    }
  };

  useEffect(() => {
    if (valueR !== value) {
      setValue(valueR || '');
    }
  }, [valueR]);

  return (
    <Container>
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={isEditMode}
      />
    </Container>
  );
};

export default CustomTextField;
