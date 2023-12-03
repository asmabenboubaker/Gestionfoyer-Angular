import { Injectable } from '@angular/core';
import {Bloc} from "../models/Bloc";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  data: Bloc[] = [];
  /*apiUrl = 'http://localhost:8082/blocs';*/
  apiUrl = environment.uniQuartersUri + '/blocs';
  constructor(
    private _http: HttpClient
  ) { }

  getAllBlocs():Observable<Bloc[]> {
    console.log("FETCHING ALL BLOCS service lvl");
    return this._http.get<Bloc[]>(this.apiUrl);
  }
  getAllBlocs2():Observable<Bloc[]> {
    console.log("FETCHING ALL BLOCS service lvl");
    return this._http.get<Bloc[]>(this.apiUrl+"/data");
  }
  removeUnderscores(obj: any): any {
    const result: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = key.startsWith('_') ? key.slice(1) : key;
        result[newKey] = obj[key];
      }
    }
    return result;
  }
  addBloc(body: Bloc) {
    console.log("ADDING BLOC service lvl::: " + JSON.stringify(body, null, 2));


    /*var bloc =  {
      "nom": body.nom,
      "capacite": body.capacite
    }*/
    // Use a custom replacer function to remove underscores from keys
    //const  bloc = this.removeUnderscores(body);
    return this._http.post(this.apiUrl, body);
  }
  updateBloc(id:number,body: Bloc) {
    console.log("UPDATING BLOC service lvl ::: " + body);
    return this._http.put(this.apiUrl+"/"+  id, body);
  }

  deleteBloc(id: number) {
    console.log("DELETING BLOC s lvl ::: " + this.apiUrl+"/"+  id);
    return this._http.delete(this.apiUrl+"/"+  id);
  }
  fetchBlocById(id: number) {
    console.log("FETCHING BLOC BY ID s lvl ::: " + this.apiUrl +"/"+ id);
    return this._http.get<Bloc>(this.apiUrl +"/"+ id);
  }

}
