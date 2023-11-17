// QuestionPaperGenerator.js

const { QuestionStore } = require('./QuestionStore');  // Corrected import statement

class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    const totalQuestions = this.questionStore.getQuestions().length;

    difficultyDistribution.forEach(({ difficulty, percentage }) => {
      const numberOfQuestions = Math.floor((percentage / 100) * totalMarks / 5); // Assuming each question is of 5 marks
      const filteredQuestions = this.questionStore.getQuestions().filter(
        q => q.difficulty === difficulty
      );

      if (filteredQuestions.length < numberOfQuestions) {
        console.warn(`Warning: Not enough questions for difficulty ${difficulty}`);
      }

      questionPaper.push(...filteredQuestions.slice(0, numberOfQuestions));
    });

    return questionPaper;
  }
}

module.exports = { QuestionPaperGenerator };
