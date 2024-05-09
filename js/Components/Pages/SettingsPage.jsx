import { Slider, Button, ButtonGroup, } from '@mui/material';
import { useRouter, } from 'next/router.js';
import { useTranslation, changeLanguage } from 'next-i18next';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import React from 'react';

export default function SettingsPage() {
	const { t, i18n, } = useTranslation();
	const router = useRouter();
	const changeLang = ( language ) => {
		changeLanguage(language);
		router.push(router.pathname, router.asPath, { locale: language, });
		
	};

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
						defaultValue={ 4 }
						step={ 2 }
						marks={ true }
						min={ 2 }
						max={ 8 }
					/>
					<h2 className={ 'text-3xl font-bold' }>{t('language')}</h2>
					<ButtonGroup
						variant="contained"
						aria-label="Basic button group"
						id='language-button'
						size='large'
					>
						<Button onClick={ () => changeLang('en') }>English</Button>
						<Button onClick={ () => changeLang('se') }>Swedish</Button>
						<Button onClick={ () => changeLang('se') }>Amharic</Button>
					</ButtonGroup>
				</div>
			
			</div>
		</GeneralLayout>
	);
}