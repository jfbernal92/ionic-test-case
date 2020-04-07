import { Identifier } from '../interfaces/identifier.interface';
import { HumanName } from '../interfaces/human-name.interface';
import { ContactPoint } from '../interfaces/contact-point.interface';
import { Gender } from '../enums/gender.enum';
import { CodeableConcept } from '../interfaces/codeable-concept.interface';
import { Attachment } from '../interfaces/attachment.interface';
import { Contact } from '../interfaces/contact.interface';
import { Communication } from '../interfaces/communication.interface';
import { Address } from '../interfaces/address.interface';

export class Patient {
   private _identifier: Array<Identifier>;
   private _active: boolean;
   private _name: Array<HumanName>;
   private _telecom: Array<ContactPoint>;
   private _gender: Gender;
   private _birthDate: Date;
   private _deceased: boolean;
   private _deceasedDateTime: Date;
   private _address: Array<Address>;
   private _maritalStatus: CodeableConcept;
   private _multipleBirth: boolean;
   private _multipleBirthInteger: number;
   private _photo: Array<Attachment>;
   private _contact: Array<Contact>;
   private _communication: Array<Communication>;

   constructor() { }

   get identifier(): Array<Identifier> { return this._identifier; }
   set identifier(identifier: Array<Identifier>) { this._identifier = identifier; }

   get active(): boolean { return this._active; }
   set active(active: boolean) { this._active = active; }

   get name(): Array<HumanName> { return this._name; }
   set name(name: Array<HumanName>) { this._name = name; }

   get telecom(): Array<ContactPoint> { return this._telecom; }
   set telecom(telecom: Array<ContactPoint>) { this._telecom = telecom; }

   get gender(): Gender { return this._gender; }
   set gender(gender: Gender) { this._gender = gender; }

   get birthDate(): Date { return this._birthDate; }
   set birthDate(birthDate: Date) { this._birthDate = birthDate; }

   get deceased(): boolean { return this._deceased; }
   set deceased(deceased: boolean) { this._deceased = deceased; }

   get deceasedDateTime(): Date { return this._deceasedDateTime; }
   set deceasedDateTime(deceasedDateTime: Date) { this._deceasedDateTime = deceasedDateTime; }

   get address(): Array<Address> { return this._address; }
   set address(address: Array<Address>) { this._address = address; }

   get maritalStatus(): CodeableConcept { return this._maritalStatus; }
   set maritalStatus(maritalStatus: CodeableConcept) { this._maritalStatus = maritalStatus; }

   get multipleBirth(): boolean { return this._multipleBirth; }
   set multipleBirth(multipleBirth: boolean) { this._multipleBirth = multipleBirth; }

   get multipleBirthInteger(): number { return this._multipleBirthInteger; }
   set multipleBirthInteger(multipleBirthInteger: number) { this._multipleBirthInteger = multipleBirthInteger; }

   get photo(): Array<Attachment> { return this._photo; }
   set photo(photo: Array<Attachment>) { this._photo = photo; }

   get contact(): Array<Contact> { return this._contact; }
   set contact(contact: Array<Contact>) { this._contact = contact; }

   get communication(): Array<Communication> { return this._communication; }
   set communication(communication: Array<Communication>) { this._communication = communication; }


}
