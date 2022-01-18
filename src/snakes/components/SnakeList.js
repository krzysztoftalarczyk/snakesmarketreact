import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import SnakeItem from './SnakeItem';
import Button from '../../shared/components/FormElements/Button';
import './SnakeList.css';

const SnakeList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No snakes found. Maybe create one?</h2>
          <Button to="/places/new">Share Snake</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(snake => (
        <SnakeItem
          key={snake.id}
          id={snake.id}
          image={snake.imageUrl}
          title={snake.title}
          morph={snake.morph}
          price={snake.price}
          creatorId={snake.creator}
         
        />
      ))}
    </ul>
  );
};

export default SnakeList;
