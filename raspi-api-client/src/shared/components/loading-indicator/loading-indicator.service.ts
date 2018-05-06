import { Injectable } from '@angular/core';

@Injectable()
/**
 * This is the service used to show / hide the loding indicator;
 */
export class LoadingIndicatorService {

    private _isLoading = false;
    public get isLoading() {
        return this._isLoading;
    }
    public set isLoading(value: boolean) {
        this._isLoading = value;
    }
}
