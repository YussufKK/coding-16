import React from 'react';
import { Header, Subtitle } from './components/Header';
import Gallery from './components/Gallery';
import './App.css';
function App() {
  const teamMembers = [
    { name: 'Yussuf Hocar', role: 'CEO', photo: 'https://media.licdn.com/dms/image/D4D03AQFDRvblPBq_sA/profile-displayphoto-shrink_200_200/0/1709743393775?e=2147483647&v=beta&t=Lzkub-PDCPwmQ5uKqMy0QtP0vh2LtrIcdR1r1rutpz0' },
    { name: 'Michael Jackson', role: 'CTO', photo: 'https://cdn-p.smehost.net/sites/28d35d54a3c64e2b851790a18a1c4c18/wp-content/uploads/2017/04/19870831_bad_album_shoot.jpg' },
    { name: 'Recep Tayyip', role: 'CFO', photo: 'https://banner2.cleanpng.com/20180810/isu/kisspng-recep-tayyip-erdoan-president-of-turkey-justice-1498926956461-cretsiz-resim-fotoraf-ykle-5b6db463b252c7.3589671515339162597304.jpg'},
  ];

  return (
    <div className="App">
      <Header title="Meet the Team" />
      <Subtitle text="Our talented team members 2024" />
      <Gallery members={teamMembers} />
    </div>
  );
}

export default App;
