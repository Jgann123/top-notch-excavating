import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor(public dialogRef: MatDialogRef<ContactFormComponent>) { }

  submitForm(form: NgForm): void {
    if (form.valid) {
      // Send form data to backend or handle accordingly
      console.log(form.value);
      // Close the dialog after form submission
      this.dialogRef.close();
    }
  }
}
