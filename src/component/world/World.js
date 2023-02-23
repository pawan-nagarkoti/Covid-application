import { useState, useEffect } from 'react';
import { Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// css implementation
const TypographyCustom = styled(Typography)({
  display: 'grid',
  placeItems: 'center',
  color: '#777',
  background: '#F5F5F5',
});

const TypographyGlobal = styled(Typography)({
  display: 'grid',
  placeItems: 'center',
  margin: '10px 0',
  color: '#777',
});

const SearchBox = styled(Box)({
  display: 'flex',
  flexColumn: 'row',
  justifyContent: 'center',
  alignItems: 'center',

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

const Flag = styled(Box)({
  height: '30vh',
  padding: 5,

  '&>*': {
    objectFit: 'contain',
    width: '100%',
    height: '30vh',
  },
});

const ApiData = styled(Box)({
  '& .infected': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 20px',
    '&>*': {
      margin: 10,
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },

    '& .decoration-data': {
      display: 'flex',
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
  },
});

export const World = () => {
  const [searchBox, setSearchBox] = useState('india');
  const [apiData, setApiData] = useState('');

  const myApi = async () => {
    try {
      const url = `https://disease.sh/v3/covid-19/countries/${searchBox}`;
      const res = await fetch(url);
      const data = await res.json();

      // data uta raha hu api se
      const { country } = data;
      const { flag } = data.countryInfo;
      const { cases } = data;
      const { recovered } = data;
      const { deaths } = data;
      const { tests } = data;
      const { todayDeaths } = data;
      const { active } = data;
      const { critical } = data;

      // us data ko use state mai set kar raha hu
      const finalData = {
        country,
        flag,
        cases,
        recovered,
        deaths,
        tests,
        todayDeaths,
        active,
        critical,
      };
      setApiData(finalData);
    } catch (error) {
      console.log('Error: ', error.message);
    }
  };

  useEffect(() => {
    myApi();
  }, []);

  //   data ko complete nikal deya hai
  const {
    country,
    flag,
    cases,
    recovered,
    deaths,
    tests,
    todayDeaths,
    active,
    critical,
  } = apiData;

  return (
    <>
      <TypographyCustom variant="h4" sx={{ textAlign: 'center' }}>
        COVID-19 WORLD CASES
      </TypographyCustom>
      <TypographyGlobal variant="h5">
        <Box sx={{ color: '#FFB6C1' }}>Country Name: {country}</Box>
      </TypographyGlobal>

      {/* search box */}
      <SearchBox>
        <input
          type="text"
          placeholder="enter your country..."
          className="input-box"
          value={searchBox}
          onChange={(e) => setSearchBox(e.target.value)}
        />
        <button className="myButton" onClick={myApi}>
          Search
        </button>
      </SearchBox>

      {/* show api data */}

      {/* flag */}
      <Container maxWidth="md">
        <Flag>
          <img src={flag} alt="flag" />
        </Flag>
      </Container>

      <ApiData>
        <Box className="infected">
          {/* infected */}
          <Box className="decoration-data">
            <Typography variant="h5" className="heading">
              INFECTED
            </Typography>
            <Typography className="numbers">{cases}</Typography>
            <Typography className="description">
              Number of INFECTED Cases Of Covid-19
            </Typography>
          </Box>

          {/* Recovered */}
          <Box className="decoration-data">
            <Typography variant="h5" className="heading">
              RECOVERED
            </Typography>
            <Typography className="numbers">{recovered}</Typography>
            <Typography className="description">
              Number of RECOVERED Cases Of Covid-19
            </Typography>
          </Box>

          {/* Total-Death */}
          <Box className="decoration-data">
            <Typography variant="h5" className="heading">
              TOTAL DEATH
            </Typography>
            <Typography className="numbers">{deaths}</Typography>
            <Typography className="description">
              Number of TOTAL DEATH Cases Of Covid-19
            </Typography>
          </Box>

          {/* CovidTest */}
          <Box className="decoration-data">
            <Typography variant="h5" className="heading">
              COVID TEST
            </Typography>
            <Typography className="numbers">{tests}</Typography>
            <Typography className="description">
              Number of COVID TEST Cases Of Covid-19
            </Typography>
          </Box>

          {/* TodayDeath */}
          <Box className="decoration-data">
            <Typography variant="h5" className="heading">
              TODAY DEATH
            </Typography>
            <Typography className="numbers">{todayDeaths}</Typography>
            <Typography className="description">
              Number of TODAY DEATH Cases Of Covid-19
            </Typography>
          </Box>

          {/* Active */}
          <Box className="decoration-data">
            <Typography variant="h5" className="heading">
              ACTIVE CASE
            </Typography>
            <Typography className="numbers">{active}</Typography>
            <Typography className="description">
              Number of ACTIVE CASE Cases Of Covid-19
            </Typography>
          </Box>

          {/* Critical */}
          <Box className="decoration-data">
            <Typography variant="h5" className="heading">
              CRITICAL SITUATION
            </Typography>
            <Typography className="numbers">{critical}</Typography>
            <Typography className="description">
              Number of CRITICAL SITUATION Cases Of Covid-19
            </Typography>
          </Box>
        </Box>
      </ApiData>
    </>
  );
};
