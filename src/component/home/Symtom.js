import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

//images
import back from '../../assets/background-img.jpg';
import left from '../../assets/main-symp-img.png';
import dry from '../../assets/symp-a.png';
import sore from '../../assets/symp-b.png';
import cold from '../../assets/symp-c.png';
import fever from '../../assets/symp-d.png';
import headache from '../../assets/symp-e.png';
import vamiting from '../../assets/symp-f.png';

// css implementation
const CovidSymtom = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  backgroundImage: `url(${back})`,
  backgrondSize: '100% 100%',
  backgroundAttachment: 'fixed',

  '& .symtomHeading': {
    textAlign: 'center',
    padding: '10px 0',
    color: '#3c6382',
  },

  '& .wraper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 40px',

    '& .leftWraper': {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  },

  '& .rightWraper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',

    '&>*': {
      flex: '1 1 10px',
      textAlign: 'center',
      padding: 5,
    },

    '&>myImg': {
      width: '30vh',
      height: 'auto',
    },
    '&>*>img': {
      width: '13rem',
      height: 'auto',
    },
  },
}));

export const Symtom = () => {
  return (
    <>
      <CovidSymtom>
        <Typography variant="h4" className="symtomHeading">
          COVID-19 SYMPTOMS
        </Typography>

        <Box className="wraper">
          <Box className="leftWraper">
            <img src={left} alt="symtoms" className="myImg" />
          </Box>

          <Box className="rightWraper">
            <Box>
              <img src={dry} alt="dry cough" />
              <Typography sx={{ color: '#3c6382', fontWeight: ' 600' }}>
                Dry Cough
              </Typography>
            </Box>

            <Box>
              <img src={sore} alt="dry cough" />
              <Typography sx={{ color: '#3c6382', fontWeight: ' 600' }}>
                Sore Throat
              </Typography>
            </Box>

            <Box>
              <img src={cold} alt="dry cough" />
              <Typography sx={{ color: '#3c6382', fontWeight: ' 600' }}>
                Cold
              </Typography>
            </Box>

            <Box>
              <img src={fever} alt="dry cough" />
              <Typography sx={{ color: '#3c6382', fontWeight: ' 600' }}>
                Fever
              </Typography>
            </Box>

            <Box>
              <img src={headache} alt="dry cough" />
              <Typography sx={{ color: '#3c6382', fontWeight: ' 600' }}>
                Headache
              </Typography>
            </Box>

            <Box>
              <img src={vamiting} alt="dry cough" />
              <Typography sx={{ color: '#3c6382', fontWeight: ' 600' }}>
                Vomiting
              </Typography>
            </Box>
          </Box>
        </Box>
      </CovidSymtom>
    </>
  );
};
