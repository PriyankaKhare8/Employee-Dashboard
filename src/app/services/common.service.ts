import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  header;
  EmployeeDataList = new BehaviorSubject([]); 
  Success = new BehaviorSubject([]); 
  URL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private _http: HttpClient) { 
    this.header = new Headers({'content-type' : 'application/json'})
  }


  getEmployeeList() {
    this._http.get(this.URL).subscribe((res:any)=>{
      if (res && res.length) {
        this.EmployeeDataList.next(res)
      }
    },
    (error)=>{
      this.handleError(error)
    }) 
  ;
  }


  deleteEmployeeRecord(id){
    const URL = this.URL + '?' +'id='+id;
    this._http.get(URL,{headers : this.header}).subscribe(res => {
      if(res) {
        console.log(res)
      }
    },(error)=>{
      this.handleError(error)
    })
  }


  addEmployeeRecord(data) {
    this._http.post(this.URL, JSON.stringify(data)).subscribe((res:any)=>{
      if(res){
        this.Success.next(res);
      }
    },(error) => {
      this.handleError(error)
    })
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
