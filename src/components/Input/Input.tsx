import { useContext, useEffect } from 'react';
import { FormContext } from '../Form/FormContext';

type InputProps = {
    id: string;
    placeholder?: string;
};

export const Input = ({ id, placeholder }: InputProps) => {
    const { formData, setFormData, initializeField } = useContext(FormContext);

    useEffect(() => {
        initializeField(id);
    }, [id, initializeField]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData({ ...formData, [id]: value });
    };

    return <input id={id} value={formData[id] ?? ''} onChange={handleChange} placeholder={placeholder} />;
};