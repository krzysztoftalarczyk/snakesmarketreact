import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Form.css';

const NewSnake = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      morph: {
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

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="morph"
        element="textarea"
        label="Morph"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid morph (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="price"
        element="input"
        label="Price"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Price."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD SNAKE
      </Button>
    </form>
  );
};

export default NewSnake;
