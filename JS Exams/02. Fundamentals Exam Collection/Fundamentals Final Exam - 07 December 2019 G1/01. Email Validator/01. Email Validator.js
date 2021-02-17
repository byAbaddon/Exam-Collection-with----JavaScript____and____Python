function emailValidator(inputArr) {
  let arr = [...inputArr]
  let email = arr.shift()

  class EmailValidator {

    constructor(email) {
      this.email = email
    }

    upper() {
      this.email = this.email.toUpperCase()
      return this.email
    }

    lower() {
      this.email = this.email.toLowerCase()
      return this.email
    }

    getDomain(count) {
      let domain = this.email.slice(-count)
      return domain
    }

    getUsername() {
      let getIndex = this.email.indexOf('@')
      if (getIndex !== -1) {
        return this.email.slice(0, getIndex)
      }
      return `The email ${email} doesn't contain the @ symbol.`
    }

    replace(replaceSymbol) {
      while (this.email.indexOf(replaceSymbol) !== -1) {
        this.email = this.email.replace(replaceSymbol, '-')
      }
      return this.email
    }

    encrypt() {
      let toAscii = Array.from(this.email).map(el => el.charCodeAt(0)).join(' ')
      return toAscii
    }

  }

  let eValidator = new EmailValidator(email)
  let line = arr.shift()

  while (line !== 'Complete') {
    let rmMake = line.replace('Make', '').trim()
    let [command, el] = rmMake.split(' ')
    command = command.replace(command[0], command[0].toLowerCase())

    console.log(eValidator[command](el))
    line = arr.shift()
  }
}

// emailValidator([
//   'Mike123@somemail.com',
//   'Make Upper',
//   'GetDomain 3',
//   'GetUsername',
//   'Encrypt',
//   'Complete',
// ])

// emailValidator([
//   'AnotherMail.com',
//   'Make Lower',
//   'GetUsername',
//   'Replace a',
//   'Complete',
//   ''
// ])