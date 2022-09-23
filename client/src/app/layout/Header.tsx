import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

interface Props {
	darkMode: boolean;
	handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
	return (
		<AppBar position="static" sx={{ mb: 4 }}>
			<Toolbar>
				<Typography variant="h6">RE-STORE</Typography>
				<Switch {...label} checked={darkMode} onChange={handleThemeChange} />
			</Toolbar>
		</AppBar>
	);
}
