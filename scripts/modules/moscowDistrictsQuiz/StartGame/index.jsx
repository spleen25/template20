import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from 'decorators';
import { Button, Typography } from 'components/controls';

const useStyles = makeStyles(() => ({
  buttonNext: {
    marginTop: '30px !important'
  }
}));

const declOfNum = (n, titles) =>
  titles[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

export const StartGame = ({ total, onButtonClick }) => {
  const classes = useStyles();

  const totalLabel = declOfNum(total, ['район', 'района', 'районов']);
  return (
    <>
      <Typography variant="body1">
        В викторине присутствует {total} {totalLabel}
      </Typography>
      <Button className={classes.buttonNext} variant="contained" onClick={onButtonClick}>
        начать игру
      </Button>
    </>
  );
};

StartGame.propTypes = {
  total: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired
};
