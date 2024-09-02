import { calmoney } from '../../scripts/utils/money.js';

describe('case suit: formatCurrency', () => {
    it('convert cents into dollar', () => {
        expect(calmoney(2095)).toEqual('20.95');
    });
    it('Works with 0', () => {
        expect(calmoney(0)).toEqual('0.00');
    });
    it('Rounds up to nearest cent', () => {
        expect(calmoney(2000.5)).toEqual('20.01');
    });
});