import translateMainCats from './translate';
import { translateMainItems } from './translate';

test('translateMainCats translates properly', () => {
    expect(translateMainCats("DAY SYSTEMS")).toBe("DIENOS SISTEMOS");
    expect(translateMainCats("day systems")).not.toBe("");
    expect(translateMainCats("LIVING ROOM FURNITURE")).toBe("SVETAINĖS IR VALGOMOJO BALDAI");
    expect(translateMainCats("lIving rOom FuRniture")).not.toBe("0");
    expect(translateMainCats("BEDROOM FURNITURE")).toBe("MIEGAMOJO BALDAI");
    expect(translateMainCats("Bedroom Furniture")).not.toBe(null);
    expect(translateMainCats("wardrobe systems")).toBe("SPINTŲ SISTEMOS");
    expect(translateMainCats("WARDROBESYSTEMS")).not.toBe("SPINTŲ SISTEMOS");
    expect(translateMainCats("outdoor furniture and accessories")).toBe("LAUKO BALDAI IR AKSESUARAI");
    expect(translateMainCats("OUTDOOR_FURNITURE_AND_ACCESSORIES")).not.toBe("LAUKO BALDAI IR AKSESUARAI");

    const junkValues = [null, undefined, NaN, 123, -123, 0, '', ' ', "", " ", "AAA", "zzz"];
    junkValues.forEach(val => expect(translateMainCats(val)).toBe(null))
})

test('translateMainItems translates properly', () => {
    expect(translateMainItems("CONTACTS")).toBe("KONTAKTAI");
    expect(translateMainItems("contacts")).toBe("KONTAKTAI")
    expect(translateMainItems("MANUFACTURERS")).toBe("GAMINTOJAI");
    expect(translateMainItems("INTERIOR")).toBe("INTERJERAS");
    expect(translateMainItems("PRODUCTS")).toBe("PRODUKTAI");
    expect(translateMainItems("FURNITURE")).toBe("BALDAI");
    expect(translateMainItems("PRIVACY POLICY")).toBe("PRIVATUMO POLITIKA");
    expect(translateMainItems("INQUIRE")).toBe("SIŲSTI UŽKLAUSĄ");
    expect(translateMainItems("DELIVERY")).toBe("PRISTATYMO SĄLYGOS IR TERMINAI");

    const junkValues = [null, undefined, NaN, 123, '', "zzz", {}, console.log(), []];
    junkValues.forEach(val => expect(translateMainCats(val)).toBe(null))
})