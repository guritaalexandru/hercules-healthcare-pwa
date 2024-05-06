import '@/styles/globals.css';
import { appWithTranslation, } from 'next-i18next';
import React from 'react';

const App = ({ Component, pageProps, }) => (
	<Component {...pageProps} />
);

export default appWithTranslation(App);