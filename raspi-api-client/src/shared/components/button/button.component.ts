import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: [
        './button.component.scss'
    ]
})
/**
 * Button component with label
 */
export class ButtonComponent {
    @Input('label')
    public label = 'LABEL';
}
