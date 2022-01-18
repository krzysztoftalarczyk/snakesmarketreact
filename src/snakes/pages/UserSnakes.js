import React from 'react';
import { useParams } from 'react-router-dom';

import SnakeList from '../components/SnakeList';

const DUMMY_SNAKES = [
  {
    id: 'p1',
    title: 'Python Regius - Male',
    price: '600$',
    imageUrl:
      'https://media.kidadl.com/60f66399e771c54e1107edc9_banana_20_ball_20_python_7e41f9cd10.jpg',
    morph: 'Banana Piebald',
    
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Reticulated Python - Female',
    price: '450$',
    imageUrl:
      'https://pbs.twimg.com/media/C3eWWoRWQAEOxc1.jpg',
    morph: 'Lavender Citron Sunfire',
    
    creator: 'u2'
  },
  {
    id: 'p2',
    title: 'Morelia Viridis - Nsex',
    price: '1100$',
    imageUrl:
      'https://www.aquasnack.co.uk/wp-content/uploads/2020/09/Morelia-viridis-Jayapura.jpg',
    morph: 'Jayapura Sorong',
    
    creator: 'u1'
  },
];

const UserSnakes = () => {
  const userId = useParams().userId;
  const loadedSnakes = DUMMY_SNAKES.filter(snake => snake.creator === userId);
  return <SnakeList items={loadedSnakes} />;
};

export default UserSnakes;
