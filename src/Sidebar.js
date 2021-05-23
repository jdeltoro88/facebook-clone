import  VideoLibraryIcon  from '@material-ui/icons/VideoLibrary';
import  LocalHospitalIcon  from '@material-ui/icons/LocalHospital';
import  EmojiFlagsIcon  from '@material-ui/icons/EmojiFlags';
import  PeopleIcon from '@material-ui/icons/People';
import  ChatIcon  from '@material-ui/icons/Chat';
import  StoreFrontIcon from '@material-ui/icons/Storefront';
import  {ExpandMoreOutlined}  from '@material-ui/icons'
import  React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow";

function Sidebar() {
    return (
        <div className= 'sidebar'>
        <SidebarRow src="https://avatars.githubusercontent.com/u/61124054?v=4" title='jon toro'/>
        <SidebarRow Icon= {LocalHospitalIcon} title='COVID-19 Information Center' />
        <SidebarRow Icon= {EmojiFlagsIcon} title='Pages'/>
        <SidebarRow Icon= {PeopleIcon} title='Friends'/>
        <SidebarRow Icon= {ChatIcon} title='Messenger'/>
        <SidebarRow Icon= {StoreFrontIcon} title='Marketplace'/>
        <SidebarRow Icon= {VideoLibraryIcon} title='Videos'/>
        <SidebarRow Icon= {ExpandMoreOutlined} title='Marketplace'/>
        </div>
    )
    
};

export default Sidebar
