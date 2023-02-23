import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

// image
import wash from '../../assets/pre-1.png';
import maintain from '../../assets/pre-2.png';
import dontTouch from '../../assets/pre-3.png';
import hand from '../../assets/pre-4.png';
import napkin from '../../assets/pre-5.png';
import wear from '../../assets/pre-6.png';

// css implementation
const PreventSection = styled(Box)({
  padding: 5,

  '& .preventHeading': {
    maxWidth: 'max-content',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#0a3d62',
    color: 'white',
  },

  '& .preventImage': {
    width: '20%',
    height: 100,
  },

  '& .insideBox': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 30px',

    '&>*': {
      flex: '1 1 20rem',
      textAlign: 'center',
      margin: 5,
    },

    '&>*:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: '.3s',
    },
  },
});

export const Prevent = () => {
  return (
    <>
      <PreventSection>
        <Typography variant="h5" className="preventHeading">
          HOW TO PREVENT VIRUS
        </Typography>

        <Box>
          <Box className="insideBox">
            <Box>
              <img src={wash} alt="wash your hand" className="preventImage" />
              <Typography sx={{ color: '#3c6382', fontWeight: '600' }}>
                Wash Your Place
              </Typography>
              <Typography sx={{ color: '#0a3d62', padding: '1px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsa a iste veniam similique nisi aliquam, debitis doloribus
                quis quibusdam!
              </Typography>
            </Box>

            <Box>
              <img
                src={maintain}
                alt="wash your hand"
                className="preventImage"
              />
              <Typography sx={{ color: '#3c6382', fontWeight: '600' }}>
                Maintain Distance
              </Typography>
              <Typography sx={{ color: '#0a3d62', padding: '1px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsa a iste veniam similique nisi aliquam, debitis doloribus
                quis quibusdam!
              </Typography>
            </Box>

            <Box>
              <img
                src={dontTouch}
                alt="wash your hand"
                className="preventImage"
              />
              <Typography sx={{ color: '#3c6382', fontWeight: '600' }}>
                Don't Touch Face
              </Typography>
              <Typography sx={{ color: '#0a3d62', padding: '1px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsa a iste veniam similique nisi aliquam, debitis doloribus
                quis quibusdam!
              </Typography>
            </Box>

            <Box>
              <img src={hand} alt="wash your hand" className="preventImage" />
              <Typography sx={{ color: '#3c6382', fontWeight: '600' }}>
                Wash Your Hand
              </Typography>
              <Typography sx={{ color: '#0a3d62', padding: '1px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsa a iste veniam similique nisi aliquam, debitis doloribus
                quis quibusdam!
              </Typography>
            </Box>

            <Box>
              <img src={napkin} alt="wash your hand" className="preventImage" />
              <Typography sx={{ color: '#3c6382', fontWeight: '600' }}>
                Use Napkin
              </Typography>
              <Typography sx={{ color: '#0a3d62', padding: '1px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsa a iste veniam similique nisi aliquam, debitis doloribus
                quis quibusdam!
              </Typography>
            </Box>

            <Box>
              <img src={wear} alt="wash your hand" className="preventImage" />
              <Typography sx={{ color: '#3c6382', fontWeight: '600' }}>
                Wear A Mask
              </Typography>
              <Typography sx={{ color: '#0a3d62', padding: '1px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsa a iste veniam similique nisi aliquam, debitis doloribus
                quis quibusdam!
              </Typography>
            </Box>
          </Box>
        </Box>
      </PreventSection>
    </>
  );
};
