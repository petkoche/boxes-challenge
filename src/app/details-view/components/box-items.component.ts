import { Component, OnInit } from '@angular/core'
import { BoxService } from 'src/app/shared/box.service';
import { BoxItemEdgeModel } from 'src/app/shared/models/box-item-edge.model';

@Component({
    selector: 'app-box-items',
    templateUrl: './box-items.component.html',
    styleUrls: ['./box-items.component.scss'],
})

export class BoxItemsComponent implements OnInit {

    constructor(private api: BoxService) {}
    edges: BoxItemEdgeModel[];

    ngOnInit() {
        this.api.getBoxItems().subscribe(res => {
            console.log("nodes", res);
            this.edges = res;
        })
    }

    private getInt(n){
        return n | 0;
    }

    private getAfterDecimal(n){
        n = Math.abs(n);
        var decimal = ((n - Math.floor(n))*100).toFixed(0);
        return decimal;
    }
}