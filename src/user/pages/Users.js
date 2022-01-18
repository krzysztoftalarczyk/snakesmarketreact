import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
    id: 'u1', 
    name: 'Krzysztof Talarczyk', 
   image: 'https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg&ga=GA1.2.522265215.1632700800',
    snakes: 2
  },
  {
    id: 'u2', 
    name: 'Anthony Willson', 
   image: 'https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=',
    snakes: 1
  }
  
  
];
  return <UsersList items={USERS} />;
};

export default Users;
