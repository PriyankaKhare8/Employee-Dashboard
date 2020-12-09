import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { AddEditEmployeeRecordComponent } from './add-edit-employee-record/add-edit-employee-record.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    DeleteConfirmationComponent,
    AddEditEmployeeRecordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents:[DeleteConfirmationComponent,AddEditEmployeeRecordComponent],
  exports:[DeleteConfirmationComponent,AddEditEmployeeRecordComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
