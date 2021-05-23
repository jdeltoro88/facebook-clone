import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Star_Wars_in_Tunisia.jpg/120px-Star_Wars_in_Tunisia.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mark_Hamill_by_Gage_Skidmore.jpg/75px-Mark_Hamill_by_Gage_Skidmore.jpg"
            title="luke skywalker"/>
             <Story
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Solo-a-star-wars-story-tall-A_%28cropped%29.png/120px-Solo-a-star-wars-story-tall-A_%28cropped%29.png"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Harrison_Ford.jpg/66px-Harrison_Ford.jpg"
            title="solo"/>
             <Story
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Reggia_di_Caserta.jpg/120px-Reggia_di_Caserta.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Natalie_Portman_Cannes_2015_5.jpg/85px-Natalie_Portman_Cannes_2015_5.jpg"
            title="padme"/>
             <Story
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Darth_vader_hot_air_balloon.jpg/94px-Darth_vader_hot_air_balloon.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Plungefest_2011_-17-_%2810059420964%29.jpg/120px-Plungefest_2011_-17-_%2810059420964%29.jpg"
            title="vader"/>
             <Story
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rebel_Alliance_logo.svg/120px-Rebel_Alliance_logo.svg.png"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Carrie_Fisher_2013.jpg/76px-Carrie_Fisher_2013.jpg"
            title="leiah"/>
            
        </div>
    )
}

export default StoryReel
