import React from "react";
import HomeSidebar from "./sidebar/Index";

const HomeLayout = ({ children, navigation }) => {
	document.body.style.background = "#F5F7FB";
	return <HomeSidebar {...{ children, navigation }}/>
};

export default HomeLayout;












