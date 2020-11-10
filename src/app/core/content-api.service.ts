import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContentApiService {

    private readonly BASE_URL = environment.baseUrl;
    private readonly GET_ALL_CONTENT = environment.contentEndpointGet;
    private readonly POST_ALL_CONTENT = environment.contentEndpointPost;

    constructor(private http: HttpClient) {
    }

    getData(): Observable<any> {
        return this.http.get(this.BASE_URL + this.GET_ALL_CONTENT);
    }

    saveData(postData: any): Observable<any> {
        return this.http.post(this.BASE_URL + this.POST_ALL_CONTENT, postData);
    }
}
