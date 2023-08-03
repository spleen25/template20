import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { difference, sample, shuffle } from 'lodash';

import { useDataFetcher } from 'hooks';
import { getMoscowDistricts } from 'sources/moscowDistricts';
import { makeStyles } from 'decorators';
import { CircularProgress, ModuleWrapper, Typography } from 'components/controls';

import { Game } from './Game';
import { StartGame } from './StartGame';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 30
  },
  circular: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: 'auto'
  },
  title: {
    marginBottom: '60px !important'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const MoscowDistrictsQuiz = () => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState({});
  const [allAnswers, setAllAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [historyAnswers, setHistoryAnswers] = useState([]);

  const { data, loading } = useDataFetcher(true, getMoscowDistricts);

  const classes = useStyles();

  const generateNewQuestion = () => {
    setSelectedAnswer(null);
    const tmpCurrentAnswer = sample(difference(data, historyAnswers));
    setCurrentAnswer(tmpCurrentAnswer);
    setHistoryAnswers((prevState) => [...prevState, tmpCurrentAnswer]);

    setAllAnswers(
      shuffle([
        tmpCurrentAnswer,
        ...shuffle(data)
          .filter((d) => d.global_id !== tmpCurrentAnswer.global_id)
          .slice(0, 3)
      ])
    );

    setStep((prevState) => prevState + 1);
  };

  const handleButtonStartGameClick = () => {
    setIsGameStart(true);
    generateNewQuestion();
  };

  const handleButtonAnswerClick = (a) => {
    if (a.global_id === currentAnswer.global_id) {
      setScore((prevState) => prevState + 1);
    }
    setSelectedAnswer(a);
  };
  return (
    <>
      <Helmet>
        <title>Moscow Districts Quiz | TEMPLATE 20</title>
      </Helmet>
      <ModuleWrapper>
        <Typography variant="h2" component="h1" className={classes.title}>
          Moscow Districts Quiz
        </Typography>
        {loading ? (
          <CircularProgress className={classes.circular} />
        ) : (
          <div className={classes.wrapper}>
            <div className={classes.content}>
              {!isGameStart ? (
                <StartGame total={data.length} onButtonClick={handleButtonStartGameClick} />
              ) : (
                <Game
                  step={step}
                  score={score}
                  total={data.length}
                  allAnswers={allAnswers}
                  currentAnswer={currentAnswer}
                  selectedAnswer={selectedAnswer}
                  onButtonAnswerClick={handleButtonAnswerClick}
                  generateNewQuestion={generateNewQuestion}
                />
              )}
            </div>
          </div>
        )}
      </ModuleWrapper>
    </>
  );
};

export default MoscowDistrictsQuiz;
