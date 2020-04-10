import { ReferencePipe } from "./reference.pipe";
import { TestUtil } from '../utils/test/test.util';

describe('ReferencePipe', () => {
    it('create an instance', () => {
        const pipe = new ReferencePipe();
        expect(pipe).toBeTruthy();
    });

    it('should return empty string when reference is null or undefined', () => {
        const pipe = new ReferencePipe();
        expect(pipe.transform(null)).toBe('');
        expect(pipe.transform(undefined)).toBe('');
    });

    it('should return display property when its available', () => {
        // Given
        const pipe = new ReferencePipe();
        const ref = TestUtil.getMockReference();
        // Then
        expect(pipe.transform(ref)).toBe(ref.display);
    });

    it('should return reference property when its display is not available', () => {
        // Given
        const pipe = new ReferencePipe();
        const ref = TestUtil.getMockReference();
        // When
        ref.display = undefined;
        // Then
        expect(pipe.transform(ref)).toBe(ref.reference);
    });


});
