import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Projects } from '../models/projects';
import { Global} from './global';

@Injectable()
export class ProjectService{
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;

  }

  testService(){
    return "Probando el servicio de Angular";
  }

  saveProject(projects:Projects): Observable<any>{
    let params = JSON.stringify(projects);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+ 'save-project', params, {headers: headers});

  }
}
