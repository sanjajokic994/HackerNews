import React, { useState, useEffect } from 'react'
import { getStory, storyUrl } from '../services/hackerNews'

export const Story = ({storyId}) => {
    const [story,setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) // Lazy eval
    },[])

    return (
        <>
        <a href={story.url} target="_blank">
            <h3>{story.title}</h3>
        </a>
        <p>{story.by}</p>
        <p>{story.time}</p>
        
        </>
    )
}