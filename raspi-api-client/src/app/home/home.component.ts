import { Component, OnInit, ViewChild, Input, Output, OnDestroy } from '@angular/core';
import {} from '@types/googlemaps';
import { EventEmitter } from '@angular/core';
import { HomeComponentService } from './home.component.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
/**
 * This class will be the entry page to the app
 */
export class HomeComponent implements OnInit, OnDestroy {

    @ViewChild('map')
    gmapElement: any;
    map: google.maps.Map;

    private _mapCenter: google.maps.LatLng;
    private _userLocation: google.maps.LatLng;
    private _userLocationPx: google.maps.Point;
    private _timer: any = null;

    /**
     * Notice the use of setters here in the following section. This is a great design pattern that can trigger
     * logic with the set pattern.
     */

    @Input('mapCenter')
    /**
     * @param  {google.maps.LatLng} value for the center of the map in lat long
     */
    public set mapCenter(value: google.maps.LatLng) {
        this._mapCenter = value;
        if (this.map) {
            this.map.setCenter(value);
        }
    }
    /**
     * @param  {google.maps.LatLng} value for the user
     * Notice how this triggers a logic to convert the lat long into screen pixels and passed up through the
     * service for event propagation.
     */
    public set userLocation(value: google.maps.LatLng) {
        this._userLocation = value;
    }

    public get mapCenter() {
        return this._mapCenter;
    }

    public constructor (private _homeComponentService: HomeComponentService) {}

    public ngOnInit() {
        this.gmapElement = document.getElementById('map');
        this.mapCenter = new google.maps.LatLng(42.8142, -73.9396);
        const mapProp: google.maps.MapOptions = {
            center: this.mapCenter,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement, mapProp);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                },
                err => {
                    console.log(err);
                }
            );
            navigator.geolocation.watchPosition(
                position => {
                    this.userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                },
                err => {
                    console.log(err);
                }
            );
        }
        // this.map.addListener('center_changed', _ => {
        //     this.userLocation = this._userLocation;
        // });
        this._timer = setInterval(_ => {
            if (this.map && this.map.getProjection()) {
                const projection = this.map.getProjection();
                const bounds = this.map.getBounds();
                const topRight = projection.fromLatLngToPoint(bounds.getNorthEast());
                const bottomLeft = projection.fromLatLngToPoint(bounds.getSouthWest());
                const scale = Math.pow(2, this.map.getZoom());
                const worldPoint = projection.fromLatLngToPoint(this._userLocation);
                const point = new google.maps.Point(Math.floor((worldPoint.x - bottomLeft.x) * scale),
                Math.floor((worldPoint.y - topRight.y) * scale));
                this._userLocationPx = point;
                this._homeComponentService.userLocation.emit(this._userLocationPx);
            }
        }, 10);
    }
    /**
     * @param  {google.maps.LatLng} position to drop the angular pin
     */
    private dropPinAt(position: google.maps.LatLng) {
        const marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: 'Hello World',
            clickable: true
        });
        marker.addListener('click', _ => {
            alert('You have clicked the marker!');
        });
    }

    ngOnDestroy() {
        if (this._timer) {
            clearInterval(this._timer);
        }
    }

}
