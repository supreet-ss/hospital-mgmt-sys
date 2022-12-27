import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent implements OnInit {
  doctorName!:string;
  title!:string;
  constructor(
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef : MatDialogRef<AddDoctorComponent>
  ) {
    this.doctorName = data.doctorName;
    this.title=data.title; 
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  delete(){
    const deleteDoctor=true;
    this.dialogRef.close(deleteDoctor);
  }

}
