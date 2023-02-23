import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

// images
import leftFirst from '../../assets/do-img1.png';
import leftSecond from '../../assets/do-img2.png';
import leftThird from '../../assets/do-img3.png';

import rightFirst from '../../assets/dont-img1.png';
import rightSecond from '../../assets/dont-img2.png';
import rightThird from '../../assets/dont-img3.png';

// css implementation
const Wraper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 50px',

  [theme.breakpoints.down('md')]: {
    margin: '0 20px',
  },

  '& .leftSide': {
    flex: '1 1 20rem',
    margin: '10px',
    background: 'rgba(0,0,0,.1)',

    '& .thingsDo': {
      background: '#0a3d62',
      textAlign: 'center',
      color: 'white',
      padding: 5,
      fontWeight: 'bold',
    },
  },

  '& .rightSide': {
    flex: '1 1 20rem',
    margin: '10px',
    background: 'rgba(0,0,0,.1)',

    '& .thingsNotDo': {
      background: '#ff3300',
      textAlign: 'center',
      color: 'white',
      padding: 5,
      fontWeight: 'bold',
    },
  },

  '& .leftDiv': {
    display: 'flex',

    '& .headingFirst': {
      color: '#0a3d62',
      padding: '8px 0 9px 0',
    },
    '& .para': {
      color: '#3c6382',
      textAlign: 'justify',
      fontSize: 15,
      padding: '0 8px 0 0',
    },
  },
}));

export const Precaution = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          my: 2,
          color: '#3c6382',
        }}
      >
        TAKE PRECAUTIONS AGAINST COCOVID-19
      </Typography>

      <Wraper>
        {/* left hand side */}
        <Box className="leftSide">
          <Typography className="thingsDo">Things You Should DO</Typography>

          <Box>
            <Box className="leftDiv">
              <Box>
                <img src={leftFirst} alt="" />
              </Box>
              <Box>
                <Typography className="headingFirst">Wash Your Hand</Typography>
                <Typography className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  facilis natus voluptatem quidem exercitationem deserunt
                  necessitatibus quam dolorum, nihil ad.
                </Typography>
              </Box>
            </Box>

            <Box className="leftDiv">
              <Box>
                <img src={leftSecond} alt="" />
              </Box>

              <Box>
                <Typography className="headingFirst">
                  always wear a mask
                </Typography>
                <Typography className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  facilis natus voluptatem quidem exercitationem deserunt
                  necessitatibus quam dolorum, nihil ad.
                </Typography>
              </Box>
            </Box>

            <Box className="leftDiv">
              <Box>
                <img src={leftThird} alt="" />
              </Box>
              <Box>
                <Typography className="headingFirst">
                  stay home during fever
                </Typography>
                <Typography className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  facilis natus voluptatem quidem exercitationem deserunt
                  necessitatibus quam dolorum, nihil ad.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* right side */}
        <Box className="rightSide">
          <Typography className="thingsNotDo">
            Things You Should Not DO
          </Typography>
          <Box>
            <Box className="leftDiv">
              <Box>
                <img src={rightFirst} alt="" />
              </Box>
              <Box>
                <Typography className="headingFirst">
                  avoid close contact with animals
                </Typography>
                <Typography className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  facilis natus voluptatem quidem exercitationem deserunt
                  necessitatibus quam dolorum, nihil ad.
                </Typography>
              </Box>
            </Box>

            <Box className="leftDiv">
              <Box>
                <img src={rightSecond} alt="" />
              </Box>
              <Box>
                <Typography className="headingFirst">
                  avoid close contact with peoples
                </Typography>
                <Typography className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  facilis natus voluptatem quidem exercitationem deserunt
                  necessitatibus quam dolorum, nihil ad.
                </Typography>
              </Box>
            </Box>

            <Box className="leftDiv">
              <Box>
                <img src={rightThird} alt="" />
              </Box>
              <Box>
                <Typography className="headingFirst">
                  avoid crowed area
                </Typography>
                <Typography className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  facilis natus voluptatem quidem exercitationem deserunt
                  necessitatibus quam dolorum, nihil ad.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Wraper>
    </>
  );
};
