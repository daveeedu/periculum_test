/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import config from "./config";
import { IDocument, IDocumentTwo, IHome, IHomeTwo } from "./icons.utils";


const {
  routes
} = config;

 
const links = [{
  authorizedUsers: ["all"],
  url: routes.dashboard,
  icon: <img src={IHome} 
    className = "m-auto w-[30px] mt-4" />,
  iconActive:  <img src={IHomeTwo} 
  className = "m-auto w-[30px] mt-4" />  
  },
  {
    authorizedUsers: ["all"],
    url: routes.allCustomers,
    icon: <img src={IDocument} 
    className = "m-auto w-[30px] mt-8" />, 
    iconActive: <img src={IDocumentTwo} 
    className = "m-auto w-[30px] mt-8" />
  },
]

export default links;