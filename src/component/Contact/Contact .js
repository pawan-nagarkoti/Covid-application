import { styled } from '@mui/material/styles';
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Checkbox,
  FormControlLabel,
  Typography,
  TextareaAutosize,
  Box,
  Button,
} from '@mui/material';

// css implementation
const Wraper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 10,

  [theme.breakpoints.down('md')]: {
    minHeight: 'calc(100vh - 30vh)',
  },
  '& .mainForm': {
    [theme.breakpoints.down('md')]: {
      padding: 5,
    },
  },
  '& .checkbox': {
    display: 'flex',
  },

  '& .sameMargin': {
    margin: '5px 0',
    lineHeight: 3,
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const Contact = () => {
  return (
    <>
      <Wraper>
        <FormGroup className="mainForm">
          <FormControl className="sameMargin">
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>

          <FormControl className="sameMargin">
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>

          <FormControl className="sameMargin">
            <InputLabel htmlFor="my-input">Mobile</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>

          <Typography sx={{ m: '6px 0 0 0' }}>Select Symptoms</Typography>
          <Box className="checkbox">
            <FormControlLabel control={<Checkbox />} label="Cold" />
            <FormControlLabel control={<Checkbox />} label="Fever" />
            <FormControlLabel
              control={<Checkbox />}
              label="Difficulty In Breath"
            />
            <FormControlLabel control={<Checkbox />} label="Feeling Weak" />
          </Box>

          <Typography sx={{ m: '6px 0 5px 0' }}>
            Describe how you are feeling
          </Typography>
          <TextareaAutosize
            placeholder="Empty"
            placeholder="share your problem........"
            style={{ width: '98%', height: 100 }}
          />

          <Button
            variant="outlined"
            color="secondary"
            variant="outlined"
            sx={{ margin: '3px 0 5px 0' }}
          >
            Submit
          </Button>
        </FormGroup>
      </Wraper>
    </>
  );
};
