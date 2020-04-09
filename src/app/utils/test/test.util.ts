import { CodeableConcept } from 'src/app/interfaces/codeable-concept.interface';
import { HumanName } from 'src/app/interfaces/human-name.interface';
import { Communication } from 'src/app/interfaces/communication.interface';
import { Patient } from 'src/app/models/patient.model';
import { NameUse } from 'src/app/enums/name-use.enum';
import { Period } from 'src/app/interfaces/period.interface';
import { Address } from 'src/app/interfaces/address.interface';
import { ContactPoint } from 'src/app/interfaces/contact-point.interface';
import { Gender } from 'src/app/enums/gender.enum';
import { Contact } from 'src/app/interfaces/contact.interface';
import { Reference } from 'src/app/interfaces/reference.interface';
import { Identifier } from 'src/app/interfaces/identifier.interface';
/**
 * Util class to get mock data for testing purpouses
 */
export class TestUtil {

    static getMockPatient(): Patient {
        let patient = new Patient();
        patient.name = [TestUtil.getMockHumanName()];
        patient.active = true;
        patient.telecom = [TestUtil.getMockContactPoint()]
        patient.gender = Gender.FEMALE;
        patient.birthDate = new Date();
        patient.deceased = false;
        patient.address = [TestUtil.getMockAddress()];
        patient.maritalStatus = TestUtil.getMockCodeable();
        patient.multipleBirth = false;
        //  patient.photo: Array<Attachment>;
        patient.contact = [TestUtil.getMockContact()];
        patient.communication = [TestUtil.getMockCommunication()];
        return patient;
    }

    static getMockCodeable(): CodeableConcept {
        return {
            coding: [{
                system: 'systemTest',
                version: 'versionTest',
                code: 'codeTest',
                display: 'displayTest',
                userSelected: true
            }],
            text: "textTest"
        }
    }

    static getMockHumanName(): HumanName {
        return {
            use: NameUse.ANONYMOUS,
            family: 'familyTest',
            given: ['givenTest'],
            prefix: ['prefixText'],
            suffix: ['prefixText'],
            text: 'textTest',
            period: TestUtil.getMockPeriod()
        }
    }

    static getMockCommunication(): Communication {
        return {
            language: TestUtil.getMockCodeable(),
            preferred: true
        }
    }

    static getMockPeriod(): Period {
        return {
            start: new Date(),
            end: new Date()
        }
    }

    static getMockAddress(): Address {
        return {
            use: 'useTest',
            type: 'typeTest',
            text: 'textTest',
            line: ['lineTest'],
            city: 'cityTest',
            district: 'districtTest',
            state: 'stateTest',
            postalCode: 'postalCodeTest',
            country: 'countryTest',
            period: TestUtil.getMockPeriod()
        }
    }

    static getMockContactPoint(): ContactPoint {
        return {
            system: 'systemTest',
            value: 'valueTest',
            use: 'useTest',
            rank: 0,
            period: TestUtil.getMockPeriod()
        }
    }

    static getMockContact(): Contact {
        return {
            relationship: [TestUtil.getMockCodeable()],
            name: TestUtil.getMockHumanName(),
            telecom: [TestUtil.getMockContactPoint()],
            address: TestUtil.getMockAddress(),
            gender: Gender.FEMALE,
            period: TestUtil.getMockPeriod()
        }
    }

    static getMockReference(): Reference {
        return {
            reference: 'referenceTest',
            type: 'typeTest',
            identifier: TestUtil.getMockIdentifier(),
            display: 'diplayTest'
        }
    }

    static getMockIdentifier(): Identifier{
        return {
            use: 'useTest',
            type: TestUtil.getMockCodeable(),
            system: 'systemTest',
            value: 'valueTest',
            period: TestUtil.getMockPeriod()
        }
    }
}