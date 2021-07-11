import filterLowercase from './filteredData';


test('filterLowercase filters duplicate names', () => {
    //  Main manufacturer names : 'PIANCA', 'ROBERTI RATTAN', 'SOVET', 'LE COMFORT', 'Gaber', 'Saba', 'Accento', 'Porada'

    expect(filterLowercase(["PIANCA", "pianca"])).toStrictEqual(["PIANCA"]);
    expect(filterLowercase(["sovet", "SOVET"])).toStrictEqual(["sovet"]);
})