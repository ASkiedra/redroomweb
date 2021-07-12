import translateMainCats, { translateMainItems, translateSubCats } from './translate';

const junkValues = [null, undefined, NaN, 0, '', "foo", true, {}, console.log, []];

// to be improved - don't type expect(x).toBe(y) every time. use an array of objects & call the function in the forEach method
test('translateMainCats translates properly', () => {
    expect(translateMainCats("DAY SYSTEMS")).toBe("DIENOS SISTEMOS");
    expect(translateMainCats("day systems")).toBe("DIENOS SISTEMOS");
    expect(translateMainCats("living room furniture")).toBe("SVETAINĖS IR VALGOMOJO BALDAI");
    expect(translateMainCats("bedroom furniture")).toBe("MIEGAMOJO BALDAI");
    expect(translateMainCats("wardrobe systems")).toBe("SPINTŲ SISTEMOS");
    expect(translateMainCats("outdoor furniture and accessories")).toBe("LAUKO BALDAI IR AKSESUARAI");

    junkValues.forEach(val => expect(translateMainCats(val)).toBe(null));
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

    junkValues.forEach(val => expect(translateMainCats(val)).toBe(null));
})


test('translateSubCats translates properly', () => {
    expect(translateSubCats("SALON FURNITURE SYSTEMS")).toBe("SVETAINĖS IR TV BALDŲ SISTEMOS");
    expect(translateSubCats("salon furniture systems")).toBe("SVETAINĖS IR TV BALDŲ SISTEMOS");
    expect(translateSubCats("lounge chairs")).toBe("POILSIO KĖDĖS");
    expect(translateSubCats("workplace furniture")).toBe("DARBO VIETOS");
    expect(translateSubCats("beds")).toBe("LOVOS");
    expect(translateSubCats("interior")).toBe("INTERJERAS");
    expect(translateSubCats("bookshelves")).toBe("KNYGŲ LENTYNOS");
    expect(translateSubCats("bed")).toBe("LOVOS");
    expect(translateSubCats("sofa beds")).toBe("SOFA LOVOS");
    expect(translateSubCats("chairs")).toBe("KĖDĖS");
    expect(translateSubCats("sofas")).toBe("SOFOS");
    expect(translateSubCats("coffee tables")).toBe("KAVOS STALIUKAI");
    expect(translateSubCats("armchairs")).toBe("FOTELIAI");
    expect(translateSubCats("poufs")).toBe("SUOLIUKAI IR PUFAI");
    expect(translateSubCats("dining tables")).toBe("VALGOMOJO STALAI");
    expect(translateSubCats("individually planned wardrobes")).toBe("INDIVIDUALIAI PROJEKTUOJAMOS DRABUŽINĖS");
    expect(translateSubCats("clothing hangers")).toBe("RŪBŲ KABYKLOS");
    expect(translateSubCats("sideboards")).toBe("INDAUJOS");
    expect(translateSubCats("bedside cabinets")).toBe("SPINTELĖS PRIE LOVOS");
    expect(translateSubCats("chests of drawers")).toBe("KOMODOS");
    expect(translateSubCats("bedroom benches")).toBe("SUOLAI PRIE LOVOS");
    expect(translateSubCats("sunbeds")).toBe("GULTAI");
    expect(translateSubCats("tables")).toBe("STALAI");
    expect(translateSubCats("furniture")).toBe("BALDAI");
    expect(translateSubCats("baskets")).toBe("KREPŠIAI");
    expect(translateSubCats("outdoor furniture and accessories")).toBe("LAUKO BALDAI IR AKSESUARAI");

    junkValues.forEach(val => expect(translateSubCats(val)).toBe(null));
})