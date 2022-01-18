import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Form.css';

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
const UpdateSnake = () => {
  const [isLoading, setIsLoading] = useState(true);
  const snakeId = useParams().snakeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      price: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedSnake = DUMMY_SNAKES.find(p => p.id === snakeId);

  useEffect(() => {
    if (identifiedSnake) {
      setFormData(
        {
          title: {
            value: identifiedSnake.title,
            isValid: true
          },
          price: {
            value: identifiedSnake.price,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedSnake]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedSnake) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find snake!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="price"
        element="textarea"
        label="Price"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid morph (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.price.value}
        initialValid={formState.inputs.price.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE SNAKE
      </Button>
    </form>
  );
};

export default UpdateSnake;
