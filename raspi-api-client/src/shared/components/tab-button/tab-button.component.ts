import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.css']
})
/**
 * This is a tab button component
 */
export class TabButtonComponent implements OnInit {

  constructor() { }

  @Input('labelName')
  public labelName: string = null;

  ngOnInit() {
  }

}
