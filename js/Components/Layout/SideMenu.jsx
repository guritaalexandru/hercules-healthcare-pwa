import { Slider, Button, ButtonGroup, } from '@mui/material';
import { useRouter, } from 'next/router.js';
import { useTranslation, } from 'next-i18next';
import React from 'react';

export default function SideMenu() {
	const { t, i18n, } = useTranslation();
	const router = useRouter();
	const changeLanguage = language => {
		i18n.changeLanguage(language);
		router.push(router.pathname, router.asPath, { locale: language, });
	};

	return (
		<div id="SideMenu">
			<div id='side-container'>
				<p id="sidemenu-text">{t('fontSize')}</p>
				<Slider
					id='font-size-slider'
					aria-label='Font size slider'
					defaultValue={ 12 }
					valueLabelDisplay="auto"
					shiftStep={ 4 }
					step={ 2 }
					marks={ true }
					min={ 10 }
					max={ 18 }
				/>
				<p id="sidemenu-text">{t('language')}</p>
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
	);
}
