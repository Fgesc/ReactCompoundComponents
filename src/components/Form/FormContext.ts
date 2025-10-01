import { createContext } from 'react';

export type FormData = Record<string, string>;

export type FormContextType = {
    formData: FormData;
    setFormData: (formData: FormData) => void;
    initializeField: (id: string) => void;
};

export const FormContext = createContext<FormContextType>({
    formData: {},
    setFormData: () => {
        throw new Error('FormContext: setFormData вызван вне Form!');
    },
    initializeField: () => {}
});