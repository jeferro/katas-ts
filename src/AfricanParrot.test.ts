import {describe, expect, it} from 'vitest'
import {AfricanParrot} from "./AfricanParrot";

describe('AfricanParrot', () => {

    it('gets speed of African Parrot with one coconut', () => {
        const africanParrot = new AfricanParrot(1);

        expect(africanParrot.getSpeed()).toBe(3);
    });

    it('gets speed of African Parrot with two coconuts', () => {
        const africanParrot = new AfricanParrot(2);

        expect(africanParrot.getSpeed()).toBe(0);
    });

    it('gets speed of African Parrot with no coconuts', () => {
        const africanParrot = new AfricanParrot(0);

        expect(africanParrot.getSpeed()).toBe(12);
    });

    it('gets cry of African Parrot', () => {
        const africanParrot = new AfricanParrot(1);

        expect( africanParrot.getCry()).toBe("Sqaark!");
    });

});

