import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HomeComponentService {
    public userLocation = new EventEmitter<google.maps.Point>();
}
