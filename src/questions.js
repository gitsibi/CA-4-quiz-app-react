const questions = [
    {
      text: "What is JSX?",
      options: [
        { id: 0, text: "A syntax extension for JavaScript", isCorrect: true },
        { id: 1, text: "A JavaScript framework", isCorrect: false },
        { id: 2, text: "A type of database", isCorrect: false },
        { id: 3, text: "A CSS preprocessor", isCorrect: false },
      ],
    },
    {
      text: "What is a component in React?",
      options: [
        { id: 0, text: "A reusable piece of UI", isCorrect: true },
        { id: 1, text: "A function returning a string", isCorrect: false },
        { id: 2, text: "An HTML element", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Which method is used to create components in React?",
      options: [
        { id: 0, text: "createComponent()", isCorrect: false },
        { id: 1, text: "React.createElement()", isCorrect: true },
        { id: 2, text: "new Component()", isCorrect: false },
        { id: 3, text: "createReactComponent()", isCorrect: false },
      ],
    },
    {
      text: "What is the use of keys in React?",
      options: [
        { id: 0, text: "To identify unique elements", isCorrect: true },
        { id: 1, text: "To change state", isCorrect: false },
        { id: 2, text: "To handle events", isCorrect: false },
        { id: 3, text: "To bind data", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of the useEffect hook?",
      options: [
        { id: 0, text: "To perform side effects", isCorrect: true },
        { id: 1, text: "To manage state", isCorrect: false },
        { id: 2, text: "To create context", isCorrect: false },
        { id: 3, text: "To fetch data from APIs", isCorrect: false },
      ],
    },
    {
      text: "What is useRef used for in React?",
      options: [
        { id: 0, text: "Accessing DOM elements directly", isCorrect: true },
        { id: 1, text: "Managing state", isCorrect: false },
        { id: 2, text: "Making API calls", isCorrect: false },
        { id: 3, text: "Routing", isCorrect: false },
      ],
    },
    {
      text: "What is useCallback used for in React?",
      options: [
        { id: 0, text: "Memoizing functions", isCorrect: true },
        { id: 1, text: "Memoizing values", isCorrect: false },
        { id: 2, text: "Managing state", isCorrect: false },
        { id: 3, text: "Handling side effects", isCorrect: false },
      ],
    },
    {
      text: "What does useReducer return?",
      options: [
        { id: 0, text: "State and dispatch function", isCorrect: true },
        { id: 1, text: "State only", isCorrect: false },
        { id: 2, text: "Reducer function", isCorrect: false },
        { id: 3, text: "Action and reducer function", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of useContext in React?",
      options: [
        { id: 0, text: "Managing global state", isCorrect: true },
        { id: 1, text: "Fetching data from APIs", isCorrect: false },
        { id: 2, text: "Performing side effects", isCorrect: false },
        { id: 3, text: "Optimizing performance", isCorrect: false },
      ],
    },
    {
      text: "Which hook would you use to avoid prop drilling?",
      options: [
        { id: 0, text: "useContext", isCorrect: true },
        { id: 1, text: "useState", isCorrect: false },
        { id: 2, text: "useReducer", isCorrect: false },
        { id: 3, text: "useEffect", isCorrect: false },
      ],
    },
  ];
  
  export default questions;
  