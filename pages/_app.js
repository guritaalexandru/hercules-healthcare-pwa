import '@/styles/globals.css';
import { appWithTranslation, } from 'next-i18next';
import React from 'react';
import {FONT_SIZE_PREFERENCES, LOCAL_STORAGE_KEYS,} from '@/js/utils/localStorage';

const App = ({ Component, pageProps, }) => {
	const [fontSize, setFontSize] = React.useState(FONT_SIZE_PREFERENCES.MEDIUM);

	React.useEffect(() => {
		let sizeClass = '';

		const fontSizePreference = localStorage.getItem(LOCAL_STORAGE_KEYS.FONT_SIZE_PREFERENCE);
		setFontSize(fontSizePreference);

		switch (fontSizePreference) {
			case FONT_SIZE_PREFERENCES.MEDIUM:
				sizeClass = 'html-font-medium';
				break;
			case FONT_SIZE_PREFERENCES.LARGE:
				sizeClass = 'html-font-large';
				break;
			case FONT_SIZE_PREFERENCES.XLARGE:
				sizeClass = 'html-font-xlarge';
				break;
			default:
				sizeClass = 'html-font-medium';
				break;
		}

		console.log('fontSizePreference', fontSizePreference);
		document.querySelector('html').classList.remove('html-font-medium', 'html-font-large', 'html-font-xlarge');
		document.querySelector('html').classList.add(sizeClass);
	}, []);

	return (
		<Component { ...pageProps } />
	);
};

export default appWithTranslation(App);