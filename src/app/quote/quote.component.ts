import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Random Tech Quotes.'
  quotes:Quote[]=[
    new Quote(1,new Date(2022,2,10),"Njeri","Walter O'brien"," Technology is best when it brings people together.",0,0),
    new Quote(2,new Date(2022,2,11),"Lewis","Matt Mullenweg"," It has become appallingly obvious that our technology has exceeded our humanity.",0,0),
    new Quote(3,new Date(2022,5,18),"Frankie","Clive James"," It is only when they go wrong that machines remind you how powerful they are.",0,0),
    new Quote(4,new Date(2022,7,7),"Fatuma","Tim Berners-Lee"," The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",0,0),
    new Quote(5,new Date(2022,1,10),"Robyn","Frank Lloyd Wright"," “If it keeps up, man will atrophy all his limbs but the push-button finger.",0,0),
    new Quote(6,new Date(2022,2,12),"Graham","Steve Jobs"," It's not a faith in technology. It's faith in people.",0,0),
    new Quote(7,new Date(2022,5,1),"Carl","Christian Lous Lange"," Technology is a useful servant but a dangerous master.",0,0),
    new Quote(8,new Date(2022,3,19),"Junior","Bill Gates","10. “The advance of technology is based on making it fit in so that you don't notice it, so it's part of everyday life.",0,0),
    new Quote(9,new Date(2022,5,14),"Chrissy","Lyndon B. Johnson","If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology.",0,0),
    new Quote(10,new Date(2022,4,16),"Jozzie","Albert Einstein","It has become appallingly obvious that our technology has exceeded our humanity .",0,0)
  ];


  addNewQuote(quote: { userName: string; author: string; quote: string; }){
    let quotesLength=this.quotes.length+1;

    let quoteObj=new Quote(quotesLength,new Date,quote.userName,quote.author,quote.quote,0,0,);

    this.quotes.push(quoteObj);
  }
  toggleDetail(index:any){
    this.quotes[index].showQuoteDetail=!this.quotes[index].showQuoteDetail
  }
  deleteQuote(isDeleted: any,index: any){

    if(isDeleted){
      let remove=confirm(`Are you sure you want to delete this ${this.quotes[index].quote}?`)
      if(remove){
        this.quotes.splice(index,1)
      }
    }

  }
  upvoteFunc(index: number){
    var up=this.quotes[index].upvote+1;
    this.quotes[index].upvote=up;
    
}


downvoteFunc(index:  number){
  var down=this.quotes[index].downvote+1;
  this.quotes[index].downvote=down;

}
findMax() {
  return Math.max.apply(Math, this.quotes.map((quote) => quote.upvote));
}
  constructor() { }

  ngOnInit() {
  }

}