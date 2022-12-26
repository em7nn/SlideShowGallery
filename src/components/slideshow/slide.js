
import { useState } from 'react';
import './slide.css';

function Slide() {
  const imeges = [
    {src: "https://media.istockphoto.com/id/524328479/photo/deep-space-nebula.jpg?s=170667a&w=0&k=20&c=VRC-im2nbL86CYx7ou9e7Cc32-RF60rm6TXFXegC4oQ="},
    {src: "https://cdn.mos.cms.futurecdn.net/4MLyNZ66GSMUp7z49Q8k3K-970-80.jpg.webp"},
    {src: "https://img.freepik.com/free-vector/color-space-doodle_102902-2358.jpg?w=996&t=st=1672078191~exp=1672078791~hmac=d0d6602eec09fabed9baa2c5099eaf09d7ffc3116cb2461995a7e3b1227b3376"}
  ]
  const [changes, setchanges] = useState(0)
  const pictureschanges = (images)=>{
    const change = imeges[images]
    setchanges(change)
  }
  return (
    <>
    <div className='yazi'>
      <h1>Here you are, this is some Space pictures for you.</h1>
    </div>
    <div className='main_pic'>
      <img src={changes.src}/>
    </div>
    
    <div className='little_pic'>
      {
        imeges.map((picture, pic)=>{
          return (
             <img src={picture.src} onClick={() => pictureschanges(pic)}/>
        )
        })
      }
    </div>
    </>
  );
}

export default Slide;
