// import { Quote } from '@angular/compiler';
import { Quote } from '../quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!:Quote;
  @Output() isDeleted=new EventEmitter<boolean>();

  quoteDeletion(remove:boolean){
    this.isDeleted.emit(remove);

  }
toggleDetails(){
  
}
  constructor() { }

  ngOnInit() {
  }

}