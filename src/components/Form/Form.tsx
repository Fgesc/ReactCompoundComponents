import { useState, type ReactNode } from 'react';
import { FormContext, type FormData } from './FormContext';

import { Input } from '../Input';
import { Row } from '../Row';
import { Button } from '../Button';

type FormProps = {
    setFormData: (formData: Record<string, string>) => void;
    children: ReactNode;
};

export const Form = ({ setFormData, children }: FormProps) => {
    const [internalFormData, setInternalFormData] = useState<FormData>({});

    const handleChange = (newData: FormData) => {
        setFormData(newData);
        setInternalFormData(newData);
    };

    return (
        <FormContext.Provider value={{ formData: internalFormData, setFormData: handleChange }}>
            {children}
        </FormContext.Provider>
    );
};

Form.Input = Input;
Form.Row = Row;
Form.Button = Button;

export default Form;
