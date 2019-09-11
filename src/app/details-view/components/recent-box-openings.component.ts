import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { BoxService } from 'src/app/shared/box.service';
import { BoxEdgeModel } from 'src/app/shared/models/box-edge.model';

@Component({
    selector: 'app-recent-box-openings',
    templateUrl: './recent-box-openings.component.html',
    styleUrls: ['./recent-box-openings.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class RecentBoxOpeningsComponent implements OnInit {

    constructor(private api: BoxService) {}
    edges: BoxEdgeModel;
    show = false;

    ngOnInit() {
        this.api.getBoxStream().subscribe(res => {
            console.log("nodes", res);
            this.edges = res;
        })
    }
}