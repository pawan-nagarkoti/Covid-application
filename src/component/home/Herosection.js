import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

import hero from '../../assets/home-bg.jpg';

// css inplementation
const Wraper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${hero})`,
  width: '100%',
  minHeight: '100vh',
  backgroundSize: '100% 100%',
  backgroundAttachment: 'fixed',

  '& .innerSection': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  '&>*>*': {
    padding: '4px 0',
  },

  '& .heading': {
    color: '#0a3d62',
  },
  '& .innerHeading': { color: '#0a3d62' },
  '& .buttonHome': {
    border: '1px solid #0a3d62',
    padding: '2px 9px',
    margin: '5px 0',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#3c6382',

    '&:hover': {
      backgroundColor: '#0a3d62',
    },
  },
}));

export const Herosection = () => {
  return (
    <>
      <Wraper>
        <Box className="innerSection">
          <Typography variant="h5" className="heading">
            Prevention From Corona Virus
          </Typography>
          <Typography variant="h6" className="innerHeading">
            Stay Home, Stay Safe
          </Typography>
          <Typography className="buttonHome">How To Prevent</Typography>
        </Box>
      </Wraper>
    </>
  );
};
