import React from 'react';
import * as PropTypes from 'prop-types';

import { makeStyles } from 'decorators';

import { InputAdornment, TextField } from 'components/controls';
import { SearchIcon } from 'components/icons';

const useStyles = makeStyles(theme => ({
  form: {
    marginBottom: theme.spacing(4)
  }
}));

const SearchCity = ({ city, execute, onCityChange }) => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <TextField
        placeholder="Enter city"
        variant="outlined"
        name={city}
        onChange={onCityChange}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

      <button onClick={execute} type="button">123</button>
    </form>
  );
};

SearchCity.propTypes = {
  city: PropTypes.string.isRequired,
  execute: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired
};

export default SearchCity;
