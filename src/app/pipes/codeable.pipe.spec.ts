import { TestUtil } from '../utils/test/test.util';
import { CodeablePipe } from './codeable.pipe';

describe('CodeablePipe', () => {
    it('create an instance', () => {
        const pipe = new CodeablePipe();
        expect(pipe).toBeTruthy();
    });

    it('should return empty string when codeable is null or undefined', () => {
        const pipe = new CodeablePipe();
        expect(pipe.transform(null)).toBe('');
        expect(pipe.transform(undefined)).toBe('');
    });

    it('should return text property when its available', () => {
        // Given
        const pipe = new CodeablePipe();
        const cod = TestUtil.getMockCodeable();
        // Then
        expect(pipe.transform(cod)).toBe(`${cod.text} `);
    });

    it('should return display property when its text is not available', () => {
        // Given
        const pipe = new CodeablePipe();
        const cod = TestUtil.getMockCodeable();
        // When
        cod.text = undefined;
        // Then
        expect(pipe.transform(cod)).toBe(`${cod.coding[0].display} `);
    });

    it('should return code property when its text and display is not available', () => {
        // Given
        const pipe = new CodeablePipe();
        const cod = TestUtil.getMockCodeable();
        // When
        cod.text = undefined;
        cod.coding[0].display = undefined;
        // Then
        expect(pipe.transform(cod)).toBe(`${cod.coding[0].code} `);
    });


});