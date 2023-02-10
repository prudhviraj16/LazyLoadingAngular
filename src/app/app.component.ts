import { Component,ElementRef,ViewChild, OnInit, SimpleChanges, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, DoCheck {
 logs : string[] = [];
  textBoxValue =""
 ngOnChanges(changes : SimpleChanges) : void{
    this.logs.push("Changes is being called")
 }

 ngDoCheck() {
  this.logs.push("Do check is being called")
 }

 onTextChange(text : any) : void{
  this.textBoxValue = text
  console.log("Text is getting changed")
 }
}
