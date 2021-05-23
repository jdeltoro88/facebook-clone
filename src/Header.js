import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return <div classname="header"> 


            <div className="header__left">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/FaceB.png/120px-FaceB.png" alt=""/>

                <div className='header__input'>
                    <SearchIcon/>
                    <input type="text" />
                </div>
            </div>


            <div className="header__middle">
                <div className='header__option'>
                    <HomeIcon fontsize="large"/>
                </div>
                <div className='header__option'>
                    <FlagIcon fontsize="large"/>
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontsize="large"/>
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon fontsize="large"/>
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontsize="large"/>
                </div>
            </div>


            <div classname="header__right">
                <div className="header__info">
                    <Avatar/>
                    <h4>jdeltoro88</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>

            
        </div>
    
}

export default Header
