class Forum {

  _users = []
  _questions = []
  _id = 1

  register(username, password, repeatPassword, email) {
    if (username === '' || password === '' || repeatPassword === '' || email === '') {
      throw new Error('Input can not be empty')
    }
    if (password !== repeatPassword) {
      throw new Error('Passwords do not match')
    }

    let isUserExist = this._users.find(a => a.username === username || a.email === email)
    if (isUserExist) {
      throw new Error('This user already exists!')
    }
    this._users.push({
      username,
      password,
      email,
      login: false
    })
    return `${username} with ${email} was registered successfully!`
  }

  login(username, password) {

    if (!this._users.find(a => a.username === username)) {
      throw new Error('There is no such user')
    }

    let isPassMatch = this._users.find(a => a.username === username && a.password === password)
    if (isPassMatch) {
      this._users.map(a => a.username === username ? a.login = true : false)
      return 'Hello! You have logged in successfully'
    }
  }

  logout(username, password) {
    if (!this._users.find(a => a.username === username)) {
      throw new Error('There is no such user')
    }
    let isPassMatch = this._users.find(a => a.username === username && a.password === password)
    if (isPassMatch) {
      this._users.map(a => a.username === username ? a.login = false : true)
      return 'You have logged out successfully'
    }
  }

  postQuestion(username, question) {
  
    let isUserExist = this._users.find(a => a.username === username && a.login === false)
    if (isUserExist) {
      throw new Error('You should be logged in to post questions')
    }

    if (!question) {
      throw new Error('Invalid questions')
    }

      this._questions.push({
        id: this._id,
        username,
        question,
        answers: []
      })

      this._id++
      return 'Your question has been posted successfully'
}

postAnswer(username, questionId, answer) {
  let isUserExist = this._users.find(a => a.username === username && a.login === true)
  if (isUserExist === undefined) {
    throw new Error('You should be logged in to post answers')
  }
  if (!answer) {
    throw new Error('Invalid answer')
  }

  let isUserAndIDExist = this._questions.find(a => a.id === questionId)
  if (!isUserAndIDExist) {
    throw new Error('There is no such question')
  }

  this._questions[questionId - 1].answers.push({
    username,
    answer
  })
  return 'Your answer has been posted successfully'
}

showQuestions() {

  let str = ''
  for (const el of this._questions) {
    str += `Question ${el.id} by ${el.username}: ${el.question}\n`
    el.answers.forEach(post => {
      str += `---${post.username}: ${post.answer}\n`
    })

  }

  return str.trim()
}

}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");

console.log(forum.showQuestions());
/*

Question 1 by Michael: Can I rent a snowboard from your shop?
---Stoyan: Yes, I have rented one last year.
Question 2 by Stoyan: How long are supposed to be the ski for my daughter?
---Michael: How old is she?
---Michael: Tell us how tall she is.
*/

// let forum = new Forum();

// forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
// forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
// forum.login('Jonny', '12345');
// forum.login('Peter', '123ab7');

// forum.postQuestion('Jonny', "Do I need glasses for skiing?");
// forum.postAnswer('Peter',1, "Yes, I have rented one last year.");
// forum.postAnswer('Jonny',1, "What was your budget");
// forum.postAnswer('Peter',1, "$50");
// forum.postAnswer('Jonny',1, "Thank you :)");

// console.log(forum.showQuestions());



//  Question 1 by Michael: Can I rent a snowboard from your shop?
//  ---Stoyan: Yes, I have rented one last year.
//  Question 2 by Stoyan: How long are supposed to be the ski for my daughter?
//  ---Michael: How old is she?
//  ---Michael: Tell us how tall she is.

//  to equal:
//  Question 1 by Michael: Can I rent a snowboard from your shop?
//  ---Stoyan: Yes, I have rented one last year.
//  Question 2 by Stoyan: How long are supposed to be the ski for my daughter?
//  ---Michael: How old is she?
//  ---Michael: Tell us how tall she is.