import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  choiceA: any = false;
  choiceB: any = false;

  onChoiceMade(ch: string){
    if (ch === 'R')
    {
      this.choiceA = true;
    }
    else if (ch === 'S')
    {
      this.choiceB = true;
    }
    // console.log(choice);
  }
}
