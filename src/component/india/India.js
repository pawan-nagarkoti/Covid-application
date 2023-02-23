import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

// css implementation
const Heading = styled(Typography)({
  textAlign: 'center',
  color: '#777',
  background: '#F5F5F5',
  padding: 5,
});

const State = styled(Typography)({
  textAlign: 'center',
  margin: '5px 0',
  color: '#FFB6C1',
});

const InputBox = styled(Box)({
  display: 'flex',
  flexColumn: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px 0',

  '& .input-box': {
    padding: 3,
    fontSize: 20,
    outline: ' none',
    border: '1px solid black',
  },
  '& .myButton': {
    fontSize: 20,
    background: 'transparent',
    marginLeft: 5,
    padding: '3px 10px',
    cursor: 'pointer',
    outline: ' none',
    border: '1px solid black',
  },
  '& .myButton:hover': {
    background: 'black',
    color: 'white',
    transiton: 0.5,
  },
});

const Wraper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 20px',

  '&>*': {
    textAlign: 'center',
    boxShadow: '-1px 4px 12px -2px rgba(122,58,58,0.7)',
    margin: 10,
  },

  '& .decoration-data': {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,

    '& .heading': {
      color: '#777',
      background: '#F5F5F5',
      width: '100%',
      display: 'grid',
      placeItems: 'center',
      padding: '10px 0',
    },

    '& .numbers': {
      display: 'grid',
      placeItems: 'center',
      margin: 2,
      fontSize: 20,
      padding: '10px 0',
    },

    '& .description': {
      color: '#777',
      display: 'grid',
      placeItems: 'center',
      borderBottom: '5px solid #FFB6C1',
      padding: '5px 10px',
    },
  },
}));

export const India = () => {
  const [apitate, setState] = useState('');
  const [indexNumber, setIndexNumber] = useState(36);
  const [myCovid, setMyCovid] = useState('Uttarakhand');

  const myApiData = async () => {
    try {
      const url = `https://data.covid19india.org/data.json`;
      const res = await fetch(url);
      const data = await res.json();
      const stored = data.statewise[indexNumber];
      setState(stored);
    } catch (error) {
      console.log(`Error: `, error.message);
    }
  };

  const serachState = () => {
    const states = [
      'Total',
      'Andaman and Nicobar Islands',
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chandigarh',
      'Chhattisgarh',
      'Dadra and Nagar Haveli and Daman and Diu',
      'Delhi',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'Jammu and Kashmir',
      'Jharkhand',
      'Karnataka',
      'Kerala',
      'Ladakh',
      'Lakshadweep',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Puducherry',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'State Unassigned',
      'Tamil Nadu',
      'Telangana',
      'Tripura',
      'Uttar Pradesh',
      'Uttarakhand',
      'West Bengal',
    ];
    const findData = states.indexOf(myCovid);
    setIndexNumber(findData);
    myApiData();
  };

  useEffect(() => {
    myApiData();
  }, [indexNumber]);

  const {
    active,
    confirmed,
    deaths,
    deltaconfirmed,
    deltadeaths,
    deltarecovered,
    recovered,
    state,
  } = apitate;

  return (
    <>
      <Heading variant="h5">Search your state to get the Covid-19 data</Heading>

      <State variant="h5" className="state">
        State : {state}
      </State>

      <InputBox>
        <input
          type="text"
          placeholder="enter your state..."
          className="input-box"
          onChange={(e) => {
            setMyCovid(e.target.value);
          }}
          value={myCovid}
        />
        <button type="button" className="myButton" onClick={serachState}>
          Search
        </button>
      </InputBox>

      {/* covid  data is show here! */}
      <Wraper>
        <Box className="decoration-data">
          <Typography variant="h5" className="heading">
            ACTIVE
          </Typography>
          <Typography className="numbers">{active}</Typography>
          <Typography className="description">
            Number of ACTIVE Cases Of Covid-19
          </Typography>
        </Box>

        <Box className="decoration-data">
          <Typography variant="h5" className="heading">
            CONFIRMED
          </Typography>
          <Typography className="numbers">{confirmed}</Typography>
          <Typography className="description">
            Number of CONFIRMED Cases Of Covid-19
          </Typography>
        </Box>

        <Box className="decoration-data">
          <Typography variant="h5" className="heading">
            RECOVERED
          </Typography>
          <Typography className="numbers">{recovered}</Typography>
          <Typography className="description">
            Number of RECOVERED Cases Of Covid-19
          </Typography>
        </Box>

        <Box className="decoration-data">
          <Typography variant="h5" className="heading">
            DEATHS
          </Typography>
          <Typography className="numbers">{deaths}</Typography>
          <Typography className="description">
            Number of DEATHS Cases Of Covid-19
          </Typography>
        </Box>

        <Box className="decoration-data">
          <Typography variant="h5" className="heading">
            DELTA CONFIRMED
          </Typography>
          <Typography className="numbers">{deltaconfirmed}</Typography>
          <Typography className="description">
            Number of DELTA CONFIRMED Cases Of Covid-19
          </Typography>
        </Box>

        <Box className="decoration-data">
          <Typography variant="h5" className="heading">
            DELTA DEATHS
          </Typography>
          <Typography className="numbers">{deltadeaths}</Typography>
          <Typography className="description">
            Number of DELTA DEATHS Cases Of Covid-19
          </Typography>
        </Box>

        <Box className="decoration-data">
          <Typography variant="h5" className="heading">
            DELTA RECOVERED
          </Typography>
          <Typography className="numbers">{deltarecovered}</Typography>
          <Typography className="description">
            Number of DELTA RECOVERED Cases Of Covid-19
          </Typography>
        </Box>
      </Wraper>

      {/* india map intergated */}
    </>
  );
};
