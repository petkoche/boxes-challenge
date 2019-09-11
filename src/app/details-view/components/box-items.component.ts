import { Component, OnInit } from '@angular/core'
import { BoxService } from 'src/app/shared/box.service';
import { BoxItemEdgeModel } from 'src/app/shared/models/box-item-edge.model';
import { expandOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutUpOnLeaveAnimation } from 'angular-animations';

@Component({
    selector: 'app-box-items',
    templateUrl: './box-items.component.html',
    styleUrls: ['./box-items.component.scss'],
    animations: [expandOnEnterAnimation(), fadeInUpOnEnterAnimation(), fadeOutUpOnLeaveAnimation()],
})

export class BoxItemsComponent implements OnInit {

    constructor(private api: BoxService) { }
    edges: BoxItemEdgeModel[];
    breakPoint: number;

    ngOnInit() {
        this.breakPoint = (window.innerWidth <= 1200) ? Math.floor(window.innerWidth / 250) : 6;
        this.api.getBoxItems().subscribe(res => {
            this.edges = res;
        })
    }

    onResize(event) {
        this.breakPoint = (event.target.innerWidth <= 1200) ? Math.floor(event.target.innerWidth / 250) : 6;
    }

    private getInt(n) {
        return n | 0;
    }

    private getAfterDecimal(n) {
        n = Math.abs(n);
        var decimal = ((n - Math.floor(n)) * 100).toFixed(0);
        return decimal;
    }
}
