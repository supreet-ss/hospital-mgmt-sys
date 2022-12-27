import { Component,Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  form !: FormGroup;
  title!: string;
  name !: string;
  mobile !: string;
  email !: string;
  gender !: string;
  department !: string;
  birthdate !: string;
  qualification!:string;

  departments: string[]=['Epidemiologist','Podiatrist','Cardiology','General Practionioner','Audiologist','Pediatrician','Oncologist','Dentist','Orthopedist','Surgeon','Neurologist','Rheumatologist','Physician','Urologist','Dermatologist'];

  constructor(
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef : MatDialogRef<AddDoctorComponent>
  ) { 
    this.title=data.title;

  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id:['',[]],
      name:['',[Validators.required]],
      mobile:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email:['',[Validators.required,Validators.email]],
      gender:['',[Validators.required]],
      department:['',[Validators.required]],
      birthdate:['',[Validators.required]],
      qualification:['',[Validators.required]]

    })
  }

  cancelRegistration(){
    this.dialogRef.close();
  }

  registerDoctor(){
    this.dialogRef.close(this.form.value);
    
  }

}
