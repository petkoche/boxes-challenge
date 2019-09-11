import { Component, OnInit } from '@angular/core'
import { BoxService } from 'src/app/shared/box.service';
import { BoxMetaModel } from 'src/app/shared/models/box-meta.model';

@Component({
    selector: 'app-box-meta',
    templateUrl: './box-meta.component.html',
    styleUrls: ['./box-meta.component.scss'],
})

export class BoxMetaComponent implements OnInit {

    constructor(private api: BoxService) {}

    box: BoxMetaModel;
    ngOnInit() {
        this.api.getBoxMeta().subscribe(res => {
            this.box = res;
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