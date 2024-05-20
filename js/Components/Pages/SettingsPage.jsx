import { Slider, Button, ButtonGroup, } from '@mui/material';
import { useTranslation, } from 'next-i18next';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import React from 'react';
import {useRouter,} from 'next/router';
import {FONT_SIZE_PREFERENCES, LOCAL_STORAGE_KEYS, setFontSizePreference,} from '@/js/utils/localStorage';

export default function SettingsPage() {
	const [defaultFontSizeSliderValue, setDefaultFontSizeSliderValue] = React.useState(1); // [1, 2, 3
	const { t, i18n, } = useTranslation();
	const router = useRouter();
	const changeLanguage = language => {
		const currentPath = router.pathname;
		router.push(currentPath, currentPath, { locale: language, });
	};

	React.useEffect(() => {
		const fontSizePreference = localStorage.getItem(LOCAL_STORAGE_KEYS.FONT_SIZE_PREFERENCE);
		switch (fontSizePreference) {
			case FONT_SIZE_PREFERENCES.MEDIUM:
				setDefaultFontSizeSliderValue(1);
				break;
			case FONT_SIZE_PREFERENCES.LARGE:
				setDefaultFontSizeSliderValue(2);
				break;
			case FONT_SIZE_PREFERENCES.XLARGE:
				setDefaultFontSizeSliderValue(3);
				break;
			default:
				setDefaultFontSizeSliderValue(1);
		}
		console.log('fontSizePreference', fontSizePreference);
	}, []);

	return (
		<GeneralLayout>
			<div id={ 'SettingsPage' }>
				<div className={ 'content-container' }>
					<h1 className={ 'text-5xl text-center mb-20 mt-10' }>
						{t('settingsPageTitle')}
					</h1>
				</div>
				<div className={ 'content-container' }>
					<h2 className={ 'text-3xl font-bold' }>{t('fontSize')}</h2>
					<Slider
						id='font-size-slider'
						aria-label='Font size slider'
						value = { defaultFontSizeSliderValue }
						step={ 1 }
						marks={ true }
						min={ 1 }
						max={ 3 }
						onChange={ (event, value) => {
							let fontSize;
							switch (value) {
								case 1:
									fontSize = 100;
									setFontSizePreference(FONT_SIZE_PREFERENCES.MEDIUM);
									setDefaultFontSizeSliderValue(1);
									break;
								case 2:
									fontSize = 120;
									setFontSizePreference(FONT_SIZE_PREFERENCES.LARGE);
									setDefaultFontSizeSliderValue(2);
									break;
								case 3:
									fontSize = 140;
									setFontSizePreference(FONT_SIZE_PREFERENCES.XLARGE);
									setDefaultFontSizeSliderValue(3);
									break;
								default:
									fontSize = 100;
									setFontSizePreference(FONT_SIZE_PREFERENCES.MEDIUM);
									setDefaultFontSizeSliderValue(1);
							}
							document.querySelector('html').style.fontSize = `${fontSize}%`;
						} }
					/>
					<h2 className={ 'text-3xl font-bold' }>{t('language')}</h2>
					<ButtonGroup
						variant="contained"
						aria-label="Basic button group"
						id='language-button'
						size='large'
					>
						<Button onClick={ () => changeLanguage('en') }>{t('englishButton')}</Button>
						<Button onClick={ () => changeLanguage('se') }>{t('swedishButton')}</Button>
						{/*<Button onClick={ () => changeLanguage('se') }>Amharic</Button>*/}
					</ButtonGroup>
				</div>
			
			</div>
		</GeneralLayout>
	);
}