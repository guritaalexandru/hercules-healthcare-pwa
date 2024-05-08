import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';
import { TextField, IconButton, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { CollectionsContext, } from '@/pages/collections';

export default function DashboardPage(){
	const { t, } = useTranslation();
	const collections = useContext(CollectionsContext);

	return (
		<GeneralLayout>
			<div id={ 'DashboardPage' }>
				<div>
					<div className={ 'content-container' }>
						<h1 className={ 'text-4xl text-center mb-10 mt-10' }>
							{t('dashboardTitle')}
						</h1>
					</div>
					<form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
						<TextField
							variant="outlined"
							placeholder="Search..."
							sx={{ width: '95%', }}
							InputProps={{
								endAdornment: (
									<IconButton type="submit">
										<SearchIcon />
									</IconButton>
								),
							}}
						/>
												
					</form>
					<div className={ 'content-container' }></div>
				</div>
			</div>
		</GeneralLayout>
	);
}