// index.js

const { QuestionStore } = require('./src/QuestionStore');
const { QuestionPaperGenerator } = require('./src/QuestionPaperGenerator');

const questionStore = new QuestionStore();
questionStore.loadQuestionsFromFile('./questions.json');

// Create QuestionPaperGenerator instance
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Example usage
const totalMarks = 100;

// Adjust the distribution percentages based on the available questions
const difficultyDistribution = [
  { difficulty: "Easy", percentage: 40 },
  { difficulty: "Medium", percentage: 40 },
  { difficulty: "Hard", percentage: 20 },
];

const generatedQuestionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);
console.log(generatedQuestionPaper);
