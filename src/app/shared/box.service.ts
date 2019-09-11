import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
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
                console.log(res);
                return res.data.box;
            }
            )
        );
    }

    getBoxStream(): Observable<BoxEdgeModel[]> {
        return this.http.get<DataWrapper>(environment.boxStreamUrl).pipe(
            map(res => {
                console.log(res);
                return res.data.boxOpenings.edges;
            }
            )
        );
    }

    getBoxItems(): Observable<BoxItemEdgeModel[]> {
        return this.http.get<DataWrapper>(environment.boxItems).pipe(
            map(res => {
                console.log(res);
                return res.data.boxItems.edges;
            }
            )
        );
    }
}