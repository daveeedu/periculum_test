import React from "react";
import { useLocation } from "react-router-dom";
import HomeSidebar from "./sidebar/Index";

const HomeLayout = ({ children, title, subtitle, handleSearch, navigation }) => {
	const { pathname } = useLocation();
	if (pathname !== "/") document.body.style.background = "#F5F7FB";

	return <HomeSidebar {...{ children, title, subtitle, handleSearch, navigation }}/>
};

export default HomeLayout;
