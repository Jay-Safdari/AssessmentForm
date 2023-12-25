// src/app/models/immigration-form-data.model.ts

export interface ImmigrationFormData {
    age: number | null;
    countryOfResidence: string;
    countryOfCitizenship: string;
    maritalStatus: string;
    childrenUnderAge: boolean;
    languageSkills: {
      english: { writing: string; reading: string; speaking: string; listening: string };
      french: { writing: string; reading: string; speaking: string; listening: string };
    };
    educationCompleted: boolean;
    workHistory: boolean;
    expressEntryProfile: boolean;
    canadianJobOffer: boolean;
    friendsOrFamilyInCanada: {
      inManitoba: boolean;
      anywhereInCanada: boolean;
    };
    personalNetWorth: number | null;
    contactInformation: {
      firstName: string;
      lastName: string;
      email: string;
      telephone: string;
    };
  }
  