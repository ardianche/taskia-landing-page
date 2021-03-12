import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskia-client';

  services = [
    {
      backgroundColor:'#525FFB',
      template:'tea',
      contentText: 'Keep tasks in one place',
      footerText: 'Save time, avoid losing work and information, delegate, and track tasks to stay on schedule',
      color:'white'
    },
    {
      backgroundColor:'#E9F0FF',
      template:'wallet',
      contentText: 'Keep tasks in one place',
      footerText: 'Save time, avoid losing work and information, delegate, and track tasks to stay on schedule',
      position:'91px',
      color:'black'
    },
    {
      backgroundColor:'#FFE7AA',
      template:'pocket',
      contentText: 'Keep tasks in one place',
      footerText: 'Save time, avoid losing work and information, delegate, and track tasks to stay on schedule',
      position:'31px',
      color:'black'
    }
  ]

}
