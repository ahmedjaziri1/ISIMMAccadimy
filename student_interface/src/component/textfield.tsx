import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [sexe, setSexe] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSexe(event.target.value as string);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
          label="First Name"
          id="outlined-start-adornment"
          sx={{ m: 2, width: '40ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          label="Last Name"
          id="outlined-start-adornment"
          sx={{ m: 2, width: '40ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />

        <TextField
          label="Phone Number"
          id="outlined-start-adornment"
          sx={{ m: 2, width: '40ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
          }}
        />
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 2, width: '40ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />

        <TextField
          label="Birthday Date"
          id="outlined-start-adornment"
          sx={{ m: 2, width: '40ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <FormControl sx={{ m: 2, width: '40ch', position: 'relative'}}>
            <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sexe}
                label="Sexe"
                onChange={handleChange}
            >
                <MenuItem value={"mas"}>Man</MenuItem>
                <MenuItem value={"fem"}>Woman</MenuItem>
            </Select>
        </FormControl>
      </div>
    </Box>
  );
}