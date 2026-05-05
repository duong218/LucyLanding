import { createContext, useContext } from 'react';

export const LangContext = createContext({ lang: 'vi', setLang: () => {} });

export const useLang = () => useContext(LangContext);