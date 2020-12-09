import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';
import {MatDialog} from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddEditEmployeeRecordComponent } from '../add-edit-employee-record/add-edit-employee-record.component';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  EmployeeList
  displayedColumns: string[] = ['name','username','email','phone','website','icons'];
  showLoader : boolean = false


  constructor(public _commonService : CommonService,  private dialog: MatDialog, public modal: NgbModal) {
    this._commonService.getEmployeeList();
   }

  ngOnInit() {
    this.showLoader = true;
    this.getEmployeeData();
  }



  getEmployeeData(){
    this._commonService.EmployeeDataList.subscribe((res:any)=>{
      if(res && res){
        this.EmployeeList = res;
        this.showLoader = false
      }
    })
  }


  deleteEmployeeRecord(record) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '30%',
      height: '25%',
      data: { itemName: record.name },
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this._commonService.deleteEmployeeRecord(record.id);
      }
    }, (error) => {
      this._commonService.handleError(error)
    });

  }

  addNewRecord() {
    let options: NgbModalOptions = { windowClass: 'dark-modal', centered: true, size: "lg", backdrop: 'static' };
    let modalref = this.modal.open(AddEditEmployeeRecordComponent, options);

    modalref.result.then(result => {
      this._commonService.getEmployeeList();
    }, reason => {
      this._commonService.getEmployeeList();
      console.log(`Dismissed reason: ${reason}`);
    });
  }







}
