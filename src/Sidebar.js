import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow 
            src='https://upload.wikimedia.org/wikipedia/commons/3/35/Pisitif_logo_2018_%28French_film_magazine%29.png'
            title="FFFFFFFFFFF"/>

            <SidebarRow 
            Icon={EmojiFlagsIcon}
            title="Pages"/>
            <SidebarRow 
            Icon={PeopleIcon}
            title="Friends"/>
            <SidebarRow
            Icon={ChatIcon}
            title="Messenger"/>
            <SidebarRow
            Icon={StorefrontIcon}
            title="MarketPlace"/>
            <SidebarRow
            Icon={VideoLibraryIcon}
            title="Videos"
            />
            <SidebarRow
            Icon={ExpandMoreIcon}
            title="MarketPlace"
            />
        </div>
    )
}

export default Sidebar;
