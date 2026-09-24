'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Pythob', '2: Rust', '3: C++'],
  // this generates [0, 0, 0, 0]
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(`
      ${this.question}\n
      ${this.options.join('\n')}\n(Write option number)`),
    );

    console.log(answer);

    // register answer
    typeof answer === 'number' &&
      answer <= this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

const answerPollBtn = document.querySelector('.poll');
answerPollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
