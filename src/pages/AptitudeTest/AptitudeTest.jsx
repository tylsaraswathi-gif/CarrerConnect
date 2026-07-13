import { useState } from "react";
import "./AptitudeTest.css";

function AptitudeTest() {
  const questions = [
    {
      question: "What is 15 × 6?",
      options: ["75", "80", "90", "95"],
      answer: "90",
    },
    {
      question: "Which data structure follows FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
    },
    {
      question: "Which language is used for React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "Which company developed Java?",
      options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
      answer: "Sun Microsystems",
    },
    {
      question: "What is 20% of 250?",
      options: ["40", "50", "60", "70"],
      answer: "50",
    },
    {
      question: "Which hook is used for state in React?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "##", "<!-- -->", "**"],
      answer: "//",
    },
    {
      question: "Which company created React?",
      options: ["Google", "Meta", "Microsoft", "Amazon"],
      answer: "Meta",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitTest = () => {
    let marks = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        marks++;
      }
    });

    setScore(marks);
    localStorage.setItem("aptitudeScore", marks);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="result-container">
        <h1>Test Completed 🎉</h1>
        <h2>
          Your Score: {score} / {questions.length}
        </h2>

        {score >= 8 ? (
          <h3 style={{ color: "green" }}>Excellent Performance!</h3>
        ) : score >= 5 ? (
          <h3 style={{ color: "orange" }}>Good Job!</h3>
        ) : (
          <h3 style={{ color: "red" }}>Keep Practicing!</h3>
        )}
      </div>
    );
  }

  return (
    <div className="test-container">
      <h1>Placement Aptitude Test</h1>

      <h3>
        Question {currentQuestion + 1} of {questions.length}
      </h3>

      <div className="question-box">
        <h2>{questions[currentQuestion].question}</h2>

        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            className={
              selectedAnswers[currentQuestion] === option
                ? "option selected"
                : "option"
            }
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="buttons">
        <button
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button onClick={submitTest}>Submit Test</button>
        ) : (
          <button onClick={nextQuestion}>Next</button>
        )}
      </div>
    </div>
  );
}

export default AptitudeTest;