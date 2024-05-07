import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';
import { TextField, IconButton, Grid, ButtonBase, styled, Typography, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { CollectionsContext, } from '@/pages/collections';

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
});

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
						<Grid
							container
							direction="row"
							justifyContent="space-around"
							alignItems="baseline"
							marginTop={ 1 }
							spacing={ 2 }
						>
							<Grid
								item
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}>
								<ButtonBase sx={{ width: 60, height: 70, }}>
									<Img
										src="favicon.ico" />
								</ButtonBase>
								<Typography>Obisterics</Typography>
							</Grid>
							<Grid
								item
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}>
								<ButtonBase sx={{ width: 60, height: 70, }}>
									<Img
										src="favicon.ico" />
								</ButtonBase>
								<Typography>Gaming Injury</Typography>
							</Grid>
							<Grid
								item
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}>
								<ButtonBase sx={{ width: 60, height: 70, }}>
									<Img
										src="favicon.ico" />
								</ButtonBase>
								<Typography>Major Owies</Typography>
							</Grid>
							<Grid
								item
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}>
								<ButtonBase sx={{ width: 60, height: 70, }}>
									<Img
										src="favicon.ico" />
								</ButtonBase>
								<Typography>Burn Care</Typography>
							</Grid>
							<Grid
								item
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}>
								<ButtonBase sx={{ width: 60, height: 70, }}>
									<Img
										src="favicon.ico" />
								</ButtonBase>
								<Typography>Covid</Typography>
							</Grid>
						</Grid>
						
					</form>
					<div className={ 'content-container' }></div>
				</div>
			</div>
		</GeneralLayout>
	);
}