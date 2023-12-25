import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ImmigrationDataService } from '../services/immigration-data.service';
import { ImmigrationFormData } from '../models/immigration-form-data.model';

@Component({
  selector: 'app-immigration-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Add ReactiveFormsModule to the imports array
  templateUrl: './immigration-form.component.html',
  styleUrls: ['./immigration-form.component.css']
})
export class ImmigrationFormComponent {
  immigrationForm = new FormGroup({
    age: new FormControl(null, Validators.required),
    countryOfResidence: new FormControl('', Validators.required),
    countryOfCitizenship: new FormControl('', Validators.required),
    maritalStatus: new FormControl('', Validators.required),
    childrenUnderAge: new FormControl(false),
    languageSkills: new FormGroup({
      english: new FormGroup({
        writing: new FormControl('', Validators.required),
        reading: new FormControl('', Validators.required),
        speaking: new FormControl('', Validators.required),
        listening: new FormControl('', Validators.required)
      }),
      french: new FormGroup({
        writing: new FormControl(''),
        reading: new FormControl(''),
        speaking: new FormControl(''),
        listening: new FormControl('')
      })
    }),
    educationCompleted: new FormControl(false),
    workHistory: new FormControl(false),
    expressEntryProfile: new FormControl(false),
    canadianJobOffer: new FormControl(false),
    friendsOrFamilyInCanada: new FormGroup({
      inManitoba: new FormControl(false),
      anywhereInCanada: new FormControl(false)
    }),
    personalNetWorth: new FormControl(null),
    contactInformation: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', Validators.required)
    })
  });

  constructor(private immigrationDataService: ImmigrationDataService) {}

  onSubmit() {
    if (this.immigrationForm.valid) {
      // Use Partial to allow all properties to be optional
      const formData: Partial<ImmigrationFormData> = this.immigrationForm.value;
  
      this.immigrationDataService.submitFormData(formData).subscribe({
        next: (response) => {
          // Handle the successful response here
        },
        error: (error) => {
          // Handle errors here
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }
  
  
}
