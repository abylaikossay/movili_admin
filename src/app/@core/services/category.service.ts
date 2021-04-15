import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CategoryRequest } from '../models/category-request';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    fullUrl: string = environment.apiUrl + '/api/categories';


    constructor(private http: HttpClient) {
    }

    addNewCategory(description: string, name: string, uslugaId: string, file): Observable<any[]> {
        return this.http.post<any>(this.fullUrl + '', file, {
            params: {
                description: description,
                name: name,
                uslugaId: uslugaId,
            },
        });
    }

    updateCategory(description: string, name: string, uslugaId: string, file, id: number): Observable<any[]> {
        return this.http.put<any>(this.fullUrl + `/${id}`, file, {
            params: {
                description: description,
                name: name,
                uslugaId: uslugaId,
            },
        });
    }

    getCategoryById(id: number): Observable<any> {
        return this.http.get<any>(this.fullUrl + `/${id}`);
    }
}
