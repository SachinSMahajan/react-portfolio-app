import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './App.scss';
import MainView from './components/Views/MainView';

const App = () => {
  const [profileDetails, setProfile] = useState(null);
  useEffect(() => {
    const getProfile = async () => {
      await axios.get('https://gitconnected.com/v1/portfolio/sachinsmahajan')
        .then(response => {
          setProfile(response.data);
          //console.log(profileDetails)
        })
    }
    getProfile();
  }, [])

  if (!profileDetails) {
    return <div></div>
  }

  return <MainView profileDetails={profileDetails}></MainView>
}
export default App;
