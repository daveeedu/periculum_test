/* eslint-disable react-hooks/exhaustive-deps */
import {
	Box,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItems = ({ link }) => {
	const { pathname } = useLocation();
	const isActive = pathname === link.url;
	const [open, setOpen] = useState(isActive);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<>
			{(link.authorizedUsers.includes('all')) && <ListItem
				disablePadding
				sx={{
					mt: '20%',
				}}
				onClick={handleToggle} className="hover:bg-transparent hover:shadow-none m-auto pl-2">
				<Box component={link?.url && Link} to={link?.url}>
					<ListItemIcon >{isActive ? link.iconActive : link.icon}</ListItemIcon>
					<ListItemText
						disableTypography
						primary={<Typography sx={{ fontFamily: 'SofiaPro', }}>{link.name}</Typography>}
					/>
				</Box>
			</ListItem>}


		</>
	);
};

export default SidebarItems;
