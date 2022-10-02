import React from 'react';
import ProfileActivity from './ProfileActivity';

const Ava1 = `${process.env.PUBLIC_URL}/img/12.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/15.png`;
const Ava3 = `${process.env.PUBLIC_URL}/img/11.png`;
const Ava4 = `${process.env.PUBLIC_URL}/img/photo_notification.png`;
const Img1 = `${process.env.PUBLIC_URL}/img/9.png`;
const Img2 = `${process.env.PUBLIC_URL}/img/13.png`;

const data = [
  {
    id: 1,
    avatar: Ava1,
    date: '1 min ago',
    name: 'Lora Kolly',
    text: `Dependent certainty off discovery him his tolerably offending. 
    Ham for attention remainder sometimes additions recommend fat our.`,
    photos: [],
  },
  {
    id: 2,
    avatar: Ava1,
    date: '3 hours ago',
    name: 'Anna Bro',
    text: `Dependent certainty off discovery him his tolerably offending. 
    Ham for attention remainder sometimes additions recommend fat our. 
    Dependent certainty off discovery him his tolerably offending. 
    Ham for attention remainder sometimes additions recommend fat our.`,
    photos: [],
  },
  {
    id: 3,
    avatar: Ava2,
    date: '3 hours ago',
    name: 'Michel Tompson',
    text: 'Dependent certainty off discovery him his tolerably offending.',
    photos: [
      {
        id: 1,
        src: Img1,
        alt: '',
      },
      {
        id: 2,
        src: Img2,
        alt: '',
      },
    ],
  },
  {
    id: 4,
    avatar: Ava3,
    date: '5 hours ago',
    name: 'Antony Mirrel',
    text: `Dependent certainty off discovery him his tolerably offending. 
    Ham for attention remainder sometimes additions recommend fat our.`,
    photos: [],
  },
  {
    id: 5,
    avatar: Ava4,
    date: '20.05.2017',
    name: 'Lora Kolly',
    text: `Dependent certainty off discovery him his tolerably offending. 
    Ham for attention remainder sometimes additions recommend fat our. 
    Dependent certainty off discovery him his tolerably offending. 
    Ham for attention remainder sometimes additions recommend fat our.`,
    photos: [],
  },
  {
    id: 6,
    avatar: Ava1,
    date: '20.05.2017',
    name: 'Maria Anderson-Bella',
    text: `Dependent certainty off discovery him his tolerably offending. 
    Ham for attention remainder sometimes additions recommend fat our. 
    Dependent certainty off discovery him his tolerably offending. 
    Ham for attention remainder sometimes additions recommend fat our.`,
    photos: [],
  },

];

const ProfileActivities = () => (
  <div>
    {data.map(item => (
      <ProfileActivity key={item.id} img={item.avatar} date={item.date} name={item.name}>
        <p>{item.text}</p>
        {item.photos.map(photo => <img key={photo.id} src={photo.src} alt={photo.alt} />)}
      </ProfileActivity>
    ))}
  </div>
);

export default ProfileActivities;
