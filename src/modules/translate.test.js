import translateMainCats from './translate';

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