class ArtGallery {
  constructor(creator = String, ) {
    this.creator = creator
    this.possibleArticles = { "picture": 200,  "photo": 50,  "item": 250}
    this.listOfArticles = []
    this.guests = []  
    this.points = {'Vip': 500, 'Middle': 250 }
  }

  addArticle(articleModel, articleName, quantity) {
    if (!this.possibleArticles[articleModel.toLowerCase()]) throw new Error('This article model is not included in this gallery!')
    articleModel = articleModel.toLowerCase()
    let findArticle = this.listOfArticles.find(x => x.articleName)

    if (findArticle && findArticle.articleName == articleName && findArticle.articleModel == articleModel.toLowerCase()) {
      findArticle.quantity += quantity
    } else {
      this.listOfArticles.push({ articleModel, articleName, quantity })
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
  }

  inviteGuest(guestName, personality) {
     let obj = {}  
    if (this.guests.length == 0) {   
      obj[guestName] = { points: this.points[personality] || 50, purchaseArticle: 0 } 
      this.guests.push(obj)
      return `You have successfully invited ${guestName}!`
    } else {
      for (const arr of this.guests) {
        for (const user in arr) {
          if (user == guestName) throw new Error(`${guestName} has already been invited.`)
        
          obj[guestName] = {points: this.points[personality] || 50, purchaseArticle: 0 } 
          this.guests.push(obj)
          return `You have successfully invited ${guestName}!`
        }
      }
    }
    }
      

  buyArticle(articleModel, articleName, guestName) {
    articleModel = articleModel.toLowerCase()
    let current = this.listOfArticles.find(x => x.articleModel == articleModel && x.articleName == articleName)
    if (!current) throw new Error('This article is not found.')
   
    let [model, name, quantity] = Object.values(current)
    
    if (quantity == 0) return `The ${articleName} is not available.`
    
    let currentGuest = this.guests.find(x => x[guestName])
  
    if (!currentGuest) return 'This guest is not invited.'
    
    let currentPoints = Object.values(currentGuest)[0].points
    if (currentPoints >= this.possibleArticles[articleModel]) {
      Object.values(currentGuest)[0].points -= this.possibleArticles[articleModel]
      Object.values(currentGuest)[0].purchaseArticle += 1
      this.listOfArticles.find(x => x.articleName == articleName).quantity--
    
      return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    } else {
      return 'You need to more points to purchase the article.'
    }
  }
    
  showGalleryInfo(criteria) {
    let result = []
    if (criteria == 'article') {
      result.push('Articles information:')
      for (const val of Object.values(this.listOfArticles)) {
        const { articleModel, articleName, quantity } = val
        result.push(`${articleModel} - ${articleName} - ${quantity}`)
      }
    } else {
      result.push('Guests information:')
      for (const val of Object.values(this.guests)) {
        result.push(`${Object.keys(val)[0]} - ${Object.values(val)[0].purchaseArticle}`)
      }
    }

   return result.join('\n')
  }

}



// //1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// //2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
//3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
//4
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));


/*
//1
Successfully added article Mona Liza with a new quantity- 3.
Successfully added article Ancient vase with a new quantity- 2.
Successfully added article Mona Liza with a new quantity- 1.

//2
You have successfully invited John!
You have successfully invited Peter!
John has already been invited.

//3
John successfully purchased the article worth 200 points.
Peter successfully purchased the article worth 250 points. 
This article is not found.

//4
Articles information:
picture - Mona Liza - 3
item - Ancient vase - 1
Guests information:
John - 1
Peter - 1
*/