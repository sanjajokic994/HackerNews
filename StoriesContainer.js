import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hackerNews';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([])
  const [selector, setSelector] = useState(100)

  useEffect(() => {
    getStoryIds().then(dunja => setStoryIds(dunja))
  }, [])
  
  const setingSelector = (e) => {
    setSelector(e.target.value)
    console.log(storyIds);
  }
  // useEffect waits ...

  return (
    <span id='container_titsto'>
      <div id='container-title'>
        <select onChange={(e)=>setingSelector(e)}>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
         
        </select>
      <h1>Welcome to</h1>
      <h1>Hacker-News</h1> 
    </div>
    <div id='container-story'>
        {storyIds.slice(0,selector).map(storyId => <Story storyId={storyId} key={storyId}/>)}
      </div>
    </span>
  )
}