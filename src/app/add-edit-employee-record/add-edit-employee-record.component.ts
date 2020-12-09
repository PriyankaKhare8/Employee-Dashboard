import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomValidators } from '../form-validations/validators';
import { CommonService } from '../services/common.service'

@Component({
  selector: 'app-add-edit-employee-record',
  templateUrl: './add-edit-employee-record.component.html',
  styleUrls: ['./add-edit-employee-record.component.css']
})
export class AddEditEmployeeRecordComponent implements OnInit {
  @Input() record;
  emplyeeRecordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public _commonService: CommonService
  ) { }

  ngOnInit() {

    this.emplyeeRecordForm = this.fb.group({
      first: ['', [Validators.required, Validators.maxLength(25)]],
      middle: ['', [Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
      last: ['', [Validators.required,,Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      website: ['', [Validators.maxLength(30)]],
      username: ['', [Validators.required,,Validators.maxLength(10)]]
    })



    if (this.record) {
      let firstName = null;
      let middleName = null;
      let lastName = null;
      let Name, EmailId, Contact;
      Name = this.record.name == '-' ? "" : this.record.name;
      EmailId = this.record.email == '-' ? "" : this.record.email;
      Contact = this.record.phone == '-' ? "" : this.record.phone;
      if (Name) {
        var nameArray = Name.split(' ');
        firstName = nameArray[0];
        lastName = nameArray.length == 1 ? "" : nameArray[nameArray.length - 1];
        if (nameArray.length == 3) {
          middleName = nameArray[1] == null ? '' : nameArray[1];
        }
      }

      this.emplyeeRecordForm.patchValue({
        first: firstName,
        email: this.record.email,
        middle: middleName,
        contact: this.record.phone,
        last: lastName,
        website: this.record.website,
        username: this.record.username


      });



    }
  }



  saveData() {
    var data;
    var name = this.emplyeeRecordForm.controls.first.value + " " + this.emplyeeRecordForm.controls.middle.value + " " + this.emplyeeRecordForm.controls.last.value;
    data = Object.assign({
      'name': name,
      'website': this.emplyeeRecordForm.controls.website.value ? this.emplyeeRecordForm.controls.website.value : " ",
      'username': this.emplyeeRecordForm.controls.username.value ? this.emplyeeRecordForm.controls.username.value : " ",
      'email': this.emplyeeRecordForm.controls.email.value ? this.emplyeeRecordForm.controls.email.value : " ",
      'phone': this.emplyeeRecordForm.controls.contact.value ? this.emplyeeRecordForm.controls.contact.value : " "
    })
    this._commonService.Success.value.length = 0;
    this._commonService.addEmployeeRecord(data);
    this._commonService.Success.subscribe((res: any) => {
      if (res) {

        this.activeModal.close(this.emplyeeRecordForm);
      }
    })

  }

}
