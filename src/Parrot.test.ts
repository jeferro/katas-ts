import { describe, it, expect } from 'vitest'

import {ParrotFactory} from "./ParrotFactory";

describe('Parrot', () => {

    it('gets speed of European Parrot', () => {
        const parrot = ParrotFactory.createEuropean();
        expect(parrot.getSpeed()).toBe(12);
    });

    it('gets speed of African Parrot with one coconut', () => {
        const parrot = ParrotFactory.createAfrican(1);
        expect(parrot.getSpeed()).toBe(3);
    });

    it('gets speed of African Parrot with two coconuts', () => {
        const parrot = ParrotFactory.createAfrican(2);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of African Parrot with no coconuts', () => {
        const parrot = ParrotFactory.createAfrican(0);
        expect(parrot.getSpeed()).toBe(12);
    });

    it('gets speed of Norwegian Blue Parrot nailed', () => {
        const parrot = ParrotFactory.createNorwegianBlue(1.5, true);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of Norwegian Blue Parrot not nailed', () => {
        const parrot = ParrotFactory.createNorwegianBlue(1.5, false);
        expect(parrot.getSpeed()).toBe(18);
    });

    it('gets speed of Norwegian Blue Parrot not nailed high voltage', () => {
        const parrot = ParrotFactory.createNorwegianBlue(4, false);
        expect(parrot.getSpeed()).toBe(24);
    });

    it('gets cry of European Parrot', () => {
        const parrot = ParrotFactory.createEuropean();
        expect( parrot.getCry()).toBe("Sqoork!");
    });

    it('gets cry of African Parrot', () => {
        const parrot = ParrotFactory.createAfrican(1);
        expect( parrot.getCry()).toBe("Sqaark!");
    });
    it('gets cry of Norwegian Blue with high voltage', () => {
        const parrot = ParrotFactory.createNorwegianBlue(4, false);
        expect( parrot.getCry()).toBe("Bzzzzzz");
    });

    it('gets cry of NorwegianBlue without voltage', () => {
        const parrot = ParrotFactory.createNorwegianBlue(0, false);
        expect(parrot.getCry()).toBe("...");
    });

});

