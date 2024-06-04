import SwashbuckleCard from "./Swashbuckle";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PersonalSiteCard from "./PersonalSite";
import MidwestCard from "./Midwest";
import ObsidanoteCard from "./Obsidanote";
import MariposaCard from "./Mariposa";
import RollWithItCard from "./RollWithIt";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


export default function Portfolio() {
	return (
		<div className="Portfolio">
			<p>Completed Projects</p>
			<Box sx={{ width: '100%' }}>
				<Stack spacing={2}>
					<Item><SwashbuckleCard></SwashbuckleCard></Item>
				</Stack>
			</Box>
			<p>WIP Projects</p>
			<Box sx={{ width: '100%' }}>
				<Stack spacing={2}>
					<Item><PersonalSiteCard></PersonalSiteCard></Item>
					<Item><MidwestCard></MidwestCard></Item>
					<Item><ObsidanoteCard></ObsidanoteCard></Item>
					<Item><MariposaCard></MariposaCard></Item>
					<Item><RollWithItCard></RollWithItCard></Item>
				</Stack>
			</Box>
		</div>
	);
}