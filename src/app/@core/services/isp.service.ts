import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class IspService {
    fullUrl: string = environment.apiUrl + '/api/isp';

    constructor(private http: HttpClient) {
    }

    getAllIsp(): Observable<any[]> {
        return this.http.get<any>(this.fullUrl + '/top');

    }
}
