import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
//import { PostAdd } from '@material-ui/icons';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {/*<PostAdd />*/}
            <Post
            profilePic='https://avatars.githubusercontent.com/u/61124054?v=4'
            message='working'
            timestamp='timestamp here'
            username='jdeltoro88'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYVjRmX0jvcr1f6DeYYQgiVoxZsdeModceg&usqp=CAU' />
            <Post 
            profilePic='https://avatars.githubusercontent.com/u/61124054?v=4'
            message='working'
            timestamp='timestamp here'
            username='jdeltoro88'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYVjRmX0jvcr1f6DeYYQgiVoxZsdeModceg&usqp=CAU'/>
            <Post 
            profilePic='https://avatars.githubusercontent.com/u/61124054?v=4'
            message='working'
            timestamp='timestamp here'
            username='jdeltoro88'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYVjRmX0jvcr1f6DeYYQgiVoxZsdeModceg&usqp=CAU'/>
            
        </div>
    )
}

export default Feed

