import { createContext } from 'react';

const FormContext = createContext({ register: () => { }, setFocus: () => { }, setValue: () => { }, watch: () => { } });

export default FormContext;