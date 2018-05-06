import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})
/**
 * This is the navigation bar for the app
 */
export class NavibarComponent implements OnInit {

  @Input('leftButtonLabel')
  public leftButtonLabel: string = null;

  @Input('rightButtonLabel')
  public rightButtonLabel: string = null;

  @Input('titleLabel')
  public titleLabel: string = null;

  constructor() { }

  ngOnInit() {
  }

}
