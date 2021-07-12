import separateWords from './separateWords';

test('separates words in a string', () => {
    expect(separateWords("Laba Diena")).toStrictEqual(["Laba", " Diena"]);

    // no space exists so separation from the start
    expect(separateWords("LabaDiena")).toStrictEqual(["", "LabaDiena"]);

    expect(separateWords("")).toStrictEqual(["", ""]);

    // non-strings should return ["", ""]
    expect(separateWords(123)).toStrictEqual(["", ""]);
})