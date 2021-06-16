class Story {
  #comments
  #likes
  constructor(title, creator) {
    this.title = title
    this.creator = creator
    this.#comments = []
    this.#likes = []
  }

  get likes() {
    if (!this.#likes.length) return `${this.title} has 0 likes`
    if (this.#likes.length == 1) return `${this.#likes[0]} likes this story!`
    return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`
  }

  like(username) {
    if (this.#likes.includes(username)) throw new Error("You can't like the same story twice!")
    if (this.creator == username) throw new Error("You can't like your own story!")
    this.#likes.push(username)
    return `${username} liked ${this.title}!`
  }

  dislike(username) {
    if (!this.#likes.includes(username)) throw new Error("You can't dislike this story!")
    this.#likes = this.#likes.filter(x => x != username)
    return `${username} disliked ${this.title}`
  }

  comment(username, content, id) {
    const existingId = this.#comments.find(el => el.id == id)
    if (!existingId) {
      this.#comments.push({
        id: this.#comments.length + 1,
        username,
        content,
        replies: []
      })

      return `${username} commented on ${this.title}`
    }

    existingId.replies.push({
      id: `${id}.${existingId.replies.length + 1}`, 
      username,
      content
    })

    return "You replied successfully"

  }

  toString(sortingType) {
    const sorting = {
      asc: (a, d) => a.id - d.id,
      desc: (a, d) => d.id - a.id,
      username: (a, d) => a.username.localeCompare(d.username),
    }

    const result = []
    result.push(`Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this.#likes.length}`,
      `Comments:`)
    this.#comments.sort(sorting[sortingType]).map((el) => {
      result.push(`-- ${el.id}. ${el.username}: ${el.content}`)
      el.replies.sort(sorting[sortingType]).map((r) => {
        result.push(`--- ${r.id}. ${r.username}: ${r.content}`)
      })
    })

    return result.join('\n')
  }
}



//-------------------------------------------(2)--------90pts  TODO:  -----------------


// class Story {
//   #comments
//   #likes
//   constructor(title, creator) {
//     this.title = title
//     this.creator = creator
//     this.#likes = []
//     this.#comments = []
//     this.replies = []
//     this.posts = []
//   }

//   get likes() {
//     if (this.#likes.length == 0)
//       return `${this.title} has 0 likes`
//     if (this.#likes.length == 1)
//       return `${this.#likes[0]} likes this story!`
//     return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`
//   }


//   like(username) {
//     if (this.#likes.includes(username)) throw new Error(`You can't like the same story twice!`)
//     if (this.creator == username) throw new Error(`You can't like your own story!`)
//     this.#likes.push(username)
//     return `${username} liked ${this.title}!`

//   }

//   dislike(username) {
//     if (!this.#likes.includes(username)) throw new Error(`You can't dislike this story!`)
//     this.#likes = this.#likes.filter(x => x != username)
//     return `${username} disliked ${this.title}`
//   }

//   comment(username, content, id) {

//  if (this.posts.includes(id)) {
//       const currentReplied = this.replies.filter(x => x[0] == id).length + 1
//       this.replies.push([id, currentReplied, username, content])
//       return `You replied successfully`    
//     }

//       this.posts.push(this.#comments.length + 1)
//       this.#comments.push([this.#comments.length + 1, username, content])
//       return `${username} commented on ${this.title}`  
//   }

//   toString(sortingType) {
//     let sortResult;
//     let sortReplies;

//     if (sortingType == 'username') {
//       sortResult = this.#comments.sort((a, d) => a[1].localeCompare(d[1]))
//       sortReplies = this.replies.sort((a, d) => a[2].localeCompare(d[2]))
//     }

//     if (sortingType == 'asc') {
//       sortResult = this.#comments.sort((a, d) => a[0] - d[0])
//       sortReplies = this.replies.sort((a, d) => a[1]  - d[1])
//     }
//     if (sortingType == 'desc') {
//       sortResult = this.#comments.sort((a, d) => d[0] - a[0])
//       sortReplies = this.replies.sort((a, d) => d[1] - a[1])
//     }

//     let collectionArr = []

//     for (const [id, name, content] of this.#comments) {
//       collectionArr.push(`-- ${id}. ${name}: ${content}`)

//       sortReplies.forEach(el => {
//         if (el[0] == id) {
//           const [id, p, name, content] = el
//           collectionArr.push(`--- ${id}.${p}. ${name}: ${content}`)
//         }
//       })

//     }

//     return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.#likes.length}\nComments:
// ${collectionArr.join('\n')}`

//   }

// }




let art = new Story("My Story", "Anny");


art.like("John")
console.log(art.likes)
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


/*
John likes this story!
My Story has 0 likes
Ammy commented on My Story
You replied successfully

Title: My Story
Creator: Anny
Likes: 0
Comments:
-- 2. Ammy: New Content
-- 3. Jessy: Nice :)
-- 1. Sammy: Some Content
--- 1.2. SAmmy: Reply@
--- 1.1. Zane: Reply

Title: My Story
Creator: Anny
Likes: 1
Comments:
-- 3. Jessy: Nice :)
-- 2. Ammy: New Content
-- 1. Sammy: Some Content
--- 1.2. SAmmy: Reply@
--- 1.1. Zane: Reply

*/