import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from 'decorators';
import { Button, Fade, LinearProgress, Typography } from 'components/controls';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    height: 650,
    objectFit: 'contain',
    margin: '30px 0 10px'
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30
  },
  linear: {
    width: '100%'
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoRows: '1fr',
    gridGap: 20,
    marginBottom: 30
  },
  buttonNext: {
    width: '100%'
  }
}));

const re = /(Флаг муниципального округа\s+)(.*)(\s+в )/;

export const Game = ({
  step,
  score,
  total,
  allAnswers,
  currentAnswer,
  selectedAnswer,
  onButtonAnswerClick,
  generateNewQuestion
}) => {
  const classes = useStyles();

  const getColor = (id) => {
    if (selectedAnswer) {
      return id === currentAnswer.global_id ? 'success' : 'error';
    }
    return 'primary';
  };

  return (
    <>
      <div className={classes.contentHeader}>
        <LinearProgress variant="determinate" value={step * (total / 100)} className={classes.linear} />
        <Typography variant="body1">
          Всего: {step}/{total}
        </Typography>
        <Typography variant="body1">Правильных ответов: {score}</Typography>
        <img
          src={`https://op.mos.ru/MEDIA/showFile?id=${currentAnswer.Cells.Picture}`}
          alt="Флаг"
          className={classes.img}
        />
        <Fade in={!!selectedAnswer}>
          <Typography variant="body2">{currentAnswer.Cells.Name}</Typography>
        </Fade>
      </div>
      <div>
        <div className={classes.buttons}>
          {allAnswers.map((answer) => (
            <Button
              variant="contained"
              key={answer.global_id}
              color={getColor(answer.global_id)}
              onClick={() => onButtonAnswerClick(answer)}
            >
              {answer.Cells.Name.match(re)[2]}
            </Button>
          ))}
        </div>
        {selectedAnswer && (
          <Button className={classes.buttonNext} variant="contained" onClick={generateNewQuestion}>
            Далее
          </Button>
        )}
      </div>
    </>
  );
};

Game.propTypes = {
  step: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  allAnswers: PropTypes.array.isRequired,
  currentAnswer: PropTypes.object.isRequired,
  selectedAnswer: PropTypes.object,
  onButtonAnswerClick: PropTypes.func.isRequired,
  generateNewQuestion: PropTypes.func.isRequired
};
