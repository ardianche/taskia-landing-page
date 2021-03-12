import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.scss']
})
export class ServiceBoxComponent implements OnInit {


  @Input() config : any;

  constructor() { }

  ngOnInit(): void {
    console.log('Config is : ',this.config);
  }

}
