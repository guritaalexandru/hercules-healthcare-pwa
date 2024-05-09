import { Slider, Button, ButtonGroup, } from '@mui/material';
import { useTranslation, } from 'next-i18next';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import React from 'react';

export default function SettingsPage() {
	const { t, i18n, } = useTranslation();
	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
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
						<Button onClick={ () => changeLanguage('en') }>English</Button>
						<Button onClick={ () => changeLanguage('se') }>Swedish</Button>
						<Button onClick={ () => changeLanguage('se') }>Amharic</Button>
					</ButtonGroup>
				</div>
			
			</div>
		</GeneralLayout>
	);
}