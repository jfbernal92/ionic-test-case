import { TestUtil } from '../utils/test/test.util';
import { PatientNamePipe, NO_NAME } from './patient-name.pipe';

describe('patientName', () => {
    it('create an instance', () => {
        const pipe = new PatientNamePipe();
        expect(pipe).toBeTruthy();
    });

    it('should return "No name information available" string when reference is null or undefined', () => {
        const pipe = new PatientNamePipe();
        expect(pipe.transform(null)).toBe(NO_NAME);
        expect(pipe.transform(undefined)).toBe(NO_NAME);
    });

    it('should return text property when its available', () => {
        // Given
        const pipe = new PatientNamePipe();
        const name = TestUtil.getMockHumanName();
        // Then
        expect(pipe.transform(name)).toBe(name.text);
    });

   
    it('should return name separated by "-" when it is multiple', () => {
        // Given
        const pipe = new PatientNamePipe();
        const name = TestUtil.getMockHumanName();
        // When
        // Then
        expect(pipe.transform([name, name])).toBe(`${name.text} - ${name.text}`);    });


});
