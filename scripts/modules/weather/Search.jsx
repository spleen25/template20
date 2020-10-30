import React from 'react';
import * as PropTypes from 'prop-types';

import { makeStyles } from 'decorators';

import { InputAdornment, TextField } from 'components/controls';
import { SearchIcon } from 'components/icons';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

const SearchCity = ({ city, fetchData, onCityChange }) => {
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={fetchData}>
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
    </form>
  );
};

SearchCity.propTypes = {
  city: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired
};

export default SearchCity;
