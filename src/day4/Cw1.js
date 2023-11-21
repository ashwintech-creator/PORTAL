import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const fruitOptions = ['Apple', 'Banana', 'Cherry', 'berry'];

const StudentForm = () => {
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedFruit) setGreeting(`Hello,It's Your favorite fruit`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Autocomplete
        options={fruitOptions}
        value={selectedFruit}
        onChange={(_, value) => setSelectedFruit(value)}
        renderInput={<TextField label="Choose a fruit" />}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      {/* {greeting {greeting}} */}
    </form>
  );
};

export default StudentForm;