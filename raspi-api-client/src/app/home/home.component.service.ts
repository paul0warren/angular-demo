import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
/***
 * This is the backbone service to extract user location (in pixels) from the Home Component
 */
export class HomeComponentService {
    public userLocation = new EventEmitter<google.maps.Point>();
}
