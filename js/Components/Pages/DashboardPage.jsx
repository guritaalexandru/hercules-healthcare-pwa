import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout';
import { useTranslation, } from 'next-i18next';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { CollectionsContext, } from '@/pages';

export default function DashboardPage(props){
	const collections = useContext(CollectionsContext);
	const { t, } = useTranslation();
	console.log(collections);

	return (
		<GeneralLayout>
			<div id={ 'DashboardPage' }>
				<div>
					<div className={ 'content-container' }>
						<h1 className={ 'text-4xl text-center mb-10 mt-10' }>
							{t('dashboardTitle')}
						</h1>
					</div>
					<form style={{ display: 'flex', justifyContent: 'center', }}>
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