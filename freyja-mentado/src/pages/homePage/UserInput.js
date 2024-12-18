import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function UserInput({ onCommand }) {
    const [input, setInput] = useState('');
    const suggestions = ['portfolio', 'contact', 'clear'];

    // Handle input change
    const handleInputChange = (event, newValue) => {
        setInput(newValue || '');
    };

    // Handle "Enter" key press
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('User input:', input);
            if (onCommand) {
                onCommand(input); // Trigger command callback
            }
            setInput(''); // Clear the input field after submission
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#00ff00',
                fontFamily: 'monospace',
            }}
        >
            {/* Static prompt */}
            <Typography variant="h6">freyja@mentado:~$ </Typography>

            {/* Inline Autocomplete Input */}
            <Autocomplete
                freeSolo
                options={suggestions}
                inputValue={input}
                onInputChange={handleInputChange}
                sx={{
                    width: '360px',
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        placeholder="Type here..."
                        onKeyDown={handleKeyDown}
                        InputProps={{
                            ...params.InputProps,
                            style: { color: '#00ff00', fontFamily: 'monospace' },
                            disableUnderline: true,
                        }}
                        sx={{
                            marginLeft: 1,
                            input: { color: '#00ff00' },
                        }}
                    />
                )}
            />
        </Box>
    );
}
