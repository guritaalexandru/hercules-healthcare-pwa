import { Slider, Button, ButtonGroup, } from '@mui/material';
import { useTranslation, } from 'next-i18next';
import React from 'react';

export default function SideMenu() {
	const { t, } = useTranslation();

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
					<Button>English</Button>
					<Button>Swedish</Button>
					<Button>Amharic</Button>
				</ButtonGroup>
			</div>
			
		</div>
	);
}
