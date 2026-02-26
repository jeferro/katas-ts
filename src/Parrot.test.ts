import {describe, expect, it} from 'vitest'
import {AfricanParrot} from "./AfricanParrot";
import {NorwegianBlueParrot} from "./NorwegianBlueParrot";
import {EuropeanParrot} from "./EuropeanParrot";

describe('Parrot', () => {

    it('gets speed of European Parrot', () => {
        const parrot = new EuropeanParrot();
        expect(parrot.getSpeed()).toBe(12);
    });

    it('gets speed of African Parrot with one coconut', () => {
        const parrot = new AfricanParrot(1);
        expect(parrot.getSpeed()).toBe(3);
    });

    it('gets speed of African Parrot with two coconuts', () => {
        const parrot = new AfricanParrot(2);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of African Parrot with no coconuts', () => {
        const parrot = new AfricanParrot(0);
        expect(parrot.getSpeed()).toBe(12);
    });

    it('gets speed of Norwegian Blue Parrot nailed', () => {
        const parrot = new NorwegianBlueParrot(1.5, true);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of Norwegian Blue Parrot not nailed', () => {
        const parrot = new NorwegianBlueParrot(1.5, false);
        expect(parrot.getSpeed()).toBe(18);
    });

    it('gets speed of Norwegian Blue Parrot not nailed high voltage', () => {
        const parrot = new NorwegianBlueParrot(4, false);
        expect(parrot.getSpeed()).toBe(24);
    });

    it('gets cry of European Parrot', () => {
        const parrot = new EuropeanParrot();
        expect( parrot.getCry()).toBe("Sqoork!");
    });

    it('gets cry of African Parrot', () => {
        const parrot = new AfricanParrot(1);
        expect( parrot.getCry()).toBe("Sqaark!");
    });
    it('gets cry of Norwegian Blue with high voltage', () => {
        const parrot = new NorwegianBlueParrot(4, false);
        expect( parrot.getCry()).toBe("Bzzzzzz");
    });

    it('gets cry of NorwegianBlue without voltage', () => {
        const parrot = new NorwegianBlueParrot(0, false);
        expect(parrot.getCry()).toBe("...");
    });

});

