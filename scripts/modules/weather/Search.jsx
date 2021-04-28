import React from 'react';
import * as PropTypes from 'prop-types';

import { makeStyles } from 'decorators';
import { InputAdornment, TextField } from 'components/controls';
import { SearchIcon } from 'components/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4)
  }
}));

const SearchCity = ({ city, setCity }) => {
  const onCityChange = (e) => {
    setCity(e.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        placeholder="Enter city"
        variant="outlined"
        name={city}
        onChange={onCityChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

SearchCity.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired
};

export default SearchCity;
