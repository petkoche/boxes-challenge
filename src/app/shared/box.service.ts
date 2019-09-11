import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BoxMetaModel } from './models/box-meta.model';
import { DataWrapper } from './models/data-wrapper.model';
import { BoxEdgeModel } from './models/box-edge.model';
import { BoxItemEdgeModel } from './models/box-item-edge.model';

@Injectable({
    providedIn: 'root'
})
export class BoxService {

    constructor(private http: HttpClient) { }

    getBoxMeta(): Observable<BoxMetaModel> {
        return this.http.get<DataWrapper>(environment.boxMetaUrl).pipe(
            map(res => {
                return res.data.box;
            })
        );
    }

    getBoxStream(): Observable<BoxEdgeModel[]> {
        return this.http.get<DataWrapper>(environment.boxStreamUrl).pipe(
            map(res => {
                return res.data.boxOpenings.edges;
            })
        );
    }

    getBoxItems(): Observable<BoxItemEdgeModel[]> {
        return this.http.get<DataWrapper>(environment.boxItemsUrl).pipe(
            map(res => {
                return res.data.boxItems.edges;
            })
        );
    }
}
