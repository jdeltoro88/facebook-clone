import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';
import ThumbIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutLineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from "@material-ui/icons/NearMe";
import {  ExpandMoreOutlined } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import firebase from './firebase'



function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className= 'post'>
            <div className='post__top'>
                <Avatar src={profilePic} className="post__avatar" />
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>

            </div>

            <div className='post__bottom'>
                <p>{message}</p>
            </div>

            <div className='post__image'>
                <img src={image} alt='' />
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutLineIcon />
                    <p>comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                    <p>Like</p>
                </div>
             
            </div>
            

            
        </div>
    )
}

export default Post
