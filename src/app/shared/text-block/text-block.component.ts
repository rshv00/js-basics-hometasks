import {Component, Input, OnInit} from '@angular/core';
import {TextBlockWithHeader} from '../../models/TextBlockWithHeader';

@Component({
    selector: 'app-text-block',
    templateUrl: './text-block.component.html',
    styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {
    @Input()
    title;
    @Input()
    text: any;
    @Input()
    aboutText: TextBlockWithHeader;

    constructor() {
    }

    ngOnInit(): void {
    }

}
