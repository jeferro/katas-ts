import {describe, expect, it} from 'vitest'
import {EuropeanParrot} from "./EuropeanParrot";

describe('EuropeanParrot', () => {

    it('gets speed of European Parrot', () => {
        const europeanParrot = new EuropeanParrot();

        expect(europeanParrot.getSpeed()).toBe(12);
    });

    it('gets cry of European Parrot', () => {
        const europeanParrot = new EuropeanParrot();

        expect( europeanParrot.getCry()).toBe("Sqoork!");
    });

});

