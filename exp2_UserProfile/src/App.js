import React from 'react';
import UserProfile from './Components/UserProfile';
import pranesh from './pranesh2.jpg'
const userData = {
  name: 'Pranesh ',
  email: 'kpranesh2004@gmail.com',
  bio: 'A passionate developer and tech enthusiast.',
  profilePicture: pranesh,
  phone: '9856755564',
  address: '123 Main Street,GH, Erode',
  socialMedia: [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/pranesh-k-662567259/' },
    { platform: 'Leetcode', url: 'https://leetcode.com/u/Pranesh__22/' },
    { platform: 'GitHub', url: 'https://github.com/pranesh-22kk' }
  ]
};

const App = () => {
  return (
    <div className="app">
      <UserProfile user={userData} />
    </div>
  );
};

export default App;