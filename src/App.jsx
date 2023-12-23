import Game from "./Game";
import { useState } from "react";
import Result from"./Result";

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'JSX в React используется для ... ?',
    variants: ['определения стилей', 'определения пропсов', 'описания компонентов'],
    correct: 2,
    },
    {
      title: 'Что такое "state" в React?',
      variants: ['время жизни компонента', 'данные, управляемые компонентом', 'методы жизненного цикла'],
      correct: 1,
    },
    {
      title: 'Какой метод жизненного цикла React компонента вызывается после того, как компонент был добавлен в DOM?',
      variants: ['componentDidMount', 'componentWillMount', 'componentDidUpdate'],
      correct: 0,
    },
    {
      title: 'Что такое "props" в React?',
      variants: ['внутреннее состояние компонента', 'параметры, передаваемые в компонент', 'результат выполнения метода render'],
      correct: 1,
    },
    {
      title: 'Какой оператор используется для рендеринга условного содержимого в JSX?',
      variants: ['if-else', 'switch', 'тернарный оператор'],
      correct: 2,
    },
    {
      title: 'Что такое "hooks" в React?',
      variants: ['функции для работы с массивами', 'функции для работы с HTTP-запросами', 'функции для работы с состоянием и эффектами в функциональных компонентах'],
      correct: 2,
    },
    {
      title: 'Какой хук React используется для выполнения побочных эффектов в функциональных компонентах?',
      variants: ['useEffect', 'useCallback', 'useStateEffect'],
      correct: 0,
    }
];

function App() {
  
const [step, setStep] = useState(0);
const [correct, setCorrect] = useState(0);
const question =  questions[step];

const percentage = Math.round(step / questions.length * 100);

const onClickVariant  = (index) => {
  console.log(step, index);
  setStep(step + 1);

  if(index == question.correct) {
    setCorrect(correct + 1);
  }
}




  return (
    <div className="App">
        {
        step != questions.length ? (<Game question = {question} onClickVariant = {onClickVariant} step = {step} percentage={percentage} />
        ) : ( 
        <Result correct = {correct} questions={questions}/> 
        )}
    </div>
  );
}

export default App;