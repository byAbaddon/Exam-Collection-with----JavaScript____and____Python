// class Library {
//   constructor(libraryName, subscribers, subscriptionTypes) {
//     this.libraryName = libraryName //Lib
//     this.subscribers = []
//     this.subscriptionTypes = {
//       normal: this.libraryName.length,
//       special: this.libraryName.length * 2,
//       vip: Number.MAX_SAFE_INTEGER
//     }

//   }

//   subscribe(name, type) {
//     if (type !== 'normal' && type !== 'special' && type !== 'vip') {
//       throw new Error(`The type ${type} is invalid`)
//     }
//     let isNameExist = this.subscribers.find(a => a.name === name)

//     if (isNameExist === undefined) {
//       this.subscribers.push({
//         name,
//         type,
//         books: []
//       })
//     } else {

//       this.subscribers.map((el) => {
//         if (el.name == name) {
//           el.type = type
//         }
//       })
//     }

//     // console.log(`Subscriber: ${name}, Type: ${type}`);
//     return `Subscriber: ${name}, Type: ${type}`
//   }

//   unsubscribe(name) {
//     let isNameExist = this.subscribers.find(a => a.name === name)
//     if (isNameExist === undefined) {
//       throw new Error(`There is no such subscriber as, ${name}`)
//     } else {
//       this.subscribers = this.subscribers.filter(n => n.name !== name)
//     }

//     //console.log(this.subscribers.map(a => a.name));
//     let result = ''
//     for (let i = 0; i < this.subscribers.length; i++) {
//       console.log(this.subscribers[i].books['title']);

//       result += `${this.subscribers[i].name}, ${this.subscribers[i].books['title']}, ${this.subscribers[i].books['author']}\n`
//     }
//     return result

//   }

//   receiveBook(subscriberName, bookTitle, bookAuthor) {
//     let isNameExist = this.subscribers.find(a => a.name === subscriberName)
//     if (isNameExist === undefined) {
//       throw new Error(`There is no such subscriber as ${subscriberName}`)
//     }

//     let bookCount = this.subscribers[0].books.length
//     let abType = this.subscribers[0].type
// //console.log( this.subscriptionTypes[abType], bookCount);

//     for (let i = 0; i < this.subscribers.length; i++) {
//       if (this.subscriptionTypes[abType] >= bookCount) {


//         if (this.subscribers[i].name === subscriberName) {
//             this.subscribers[i].books.push({
//             title: bookTitle,
//             author: bookAuthor
//           })

//          } 
         
//         } else {
//                 throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[abType]}!`)
//               }

       
//           //console.log( this.subscribers[i].books); 
//           return this.subscribers[i].name
//         }

//     }

//     showInfo() {

//       // console.log(this.subscribers);
//       let collection = []
//       let result = ''
//       for (const el of this.subscribers) {
//         let info = `Subscriber: ${el.name}, Type: ${el.type}`
//         let titleAuthor = el.books.map(a => a.title + ' by ' + a.author).join(', ')
//         if (titleAuthor.length === 0) {
//           result = `${this.libraryName} has no information about any subscribers`
//         } else {
//           result = `${info}\nReceived books: ${titleAuthor}\n`
//         }
//         collection.push(result)
//       }

//       return collection.join('\n')

//     }

//   }



class Library {
  constructor(libraryName, subscribers, subscriptionTypes) {
    this.libraryName = libraryName
    this.subscribers = []
    this.subscriptionTypes = {
      normal: this.libraryName.length,
      special: this.libraryName.length * 2,
      vip: Number.MAX_SAFE_INTEGER
    }
    this.abonateNames = []
  }

  subscribe(name, type) {
    if (!this.subscriptionTypes.hasOwnProperty(type)) {
      throw new Error(`The type ${type} is invalid`)
    }
    if (!this.subscribers.includes(name)) {
      this.subscribers.push({
        name,
        type,
        books: []
      })
    } else {
      this.subscribers[type] = type
    }
   // console.log(`Subscriber: ${name}, Type: ${type}`);
    return `Subscriber: ${name}, Type: ${type}`
  }

  unsubscribe(name) {
    for (const el of this.subscribers) {
      this.abonateNames.push(el.name)
    }

    if (!this.abonateNames.includes(name)) {
      throw new Error(`There is no such subscriber as, ${name}`)
    } else {
      this.subscribers[this.abonateNames.indexOf(name)] = null
      this.subscribers = this.subscribers.filter(a => a !== null)
    }
    console.log(this.subscribers);
    return this.subscribers
  }

  receiveBook(subscriberName, bookTitle, bookAuthor) {

    for (const el of this.subscribers) {
      this.abonateNames.push(el.name)
    }

    if (!this.abonateNames.includes(subscriberName)) {
      throw new Error(`There is no such subscriber as ${subscriberName}`)
    } else {

      //  if (this.subscriptionTypes.hasOwnProperty()) {
      for (const el of this.subscribers) {
        if (el.type) {
          el.books.push({
            title: bookTitle,
            author: bookAuthor
          })

        } else {
          console.log(this.this.subscribers);
          
          throw new Error(`You have reached your subscription limit ${subTypeLimit}!`)
        }

      }
    }
    // console.log(this.subscribers[this.abonateNames.indexOf(subscriberName)]); 
      return this.subscribers[this.abonateNames.indexOf(subscriberName)]
    
  }

    showInfo() {

      // console.log(this.subscribers);
      let collection = []
      let result = ''
      for (const el of this.subscribers) {
        let info = `Subscriber: ${el.name}, Type: ${el.type}`
        let titleAuthor = el.books.map(a => a.title + ' by ' + a.author).join(', ')
        if (titleAuthor.length === 0) {
          result = `${this.libraryName} has no information about any subscribers`
        } else {
          result = `${info}\nReceived books: ${titleAuthor}\n`
        }
        collection.push(result)
      }

      return collection.join('\n')

    }


}











  let lib = new Library('Lib');
  //console.log(lib.libraryName);

  lib.subscribe('Peter', 'normal');
  lib.subscribe('John', 'special');
  // lib.subscribe('Peter', 'normal');
  // lib.subscribe('Peter', 'normal');
  // lib.subscribe('Peter', 'vip');
  // lib.subscribe('John', 'normal');
  // console.log(lib.subscribe('Peter', 'normal'));
  // console.log(lib.subscribe('John', 'special'));
  // console.log(lib.subscribe('Peter', 'normal'));


  //console.log(lib.unsubscribe('Peter'));  // undefined
  //console.log(lib.unsubscribe('John1'));  //throw Error



  lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
  lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
  lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

  console.log(lib.showInfo());


  // Corresponding output
  // Subscriber: Peter, Type: normal
  // Received books: Lord of the rings by J. R. R. Tolkien
  // Subscriber: John, Type: special
  // Received books: A Song of Ice and Fire by George R. R. Martin, Harry Potter by J. K. Rowling