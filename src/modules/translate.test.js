import translateMainCats from './translate';
import {translateSubCats} from './translate';

const junkValues = [null, undefined, NaN, 123, -123, 0.123, '', "zzz", "ąčęėįšųūž", {}, console.log(), []];

test('translateMainCats translates properly', () => {
    expect(translateMainCats("DAY SYSTEMS")).toBe("DIENOS SISTEMOS");
    expect(translateMainCats("day systems")).not.toBe("");
    expect(translateMainCats("LIVING ROOM FURNITURE")).toBe("SVETAINĖS IR VALGOMOJO BALDAI");
    expect(translateMainCats("BEDROOM FURNITURE")).toBe("MIEGAMOJO BALDAI");
    expect(translateMainCats("wardrobe systems")).toBe("SPINTŲ SISTEMOS");
    expect(translateMainCats("WARDROBESYSTEMS")).not.toBe("SPINTŲ SISTEMOS");
    expect(translateMainCats("outdoor furniture and accessories")).toBe("LAUKO BALDAI IR AKSESUARAI");
    expect(translateMainCats("OUTDOOR_FURNITURE_AND_ACCESSORIES")).not.toBe("LAUKO BALDAI IR AKSESUARAI");

    junkValues.forEach(val => expect(translateMainCats(val)).toBe(null))
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
    expect(translateSubCats("")).toBe(null);

    junkValues.forEach(val => expect(translateSubCats(val)).toBe(null))
})