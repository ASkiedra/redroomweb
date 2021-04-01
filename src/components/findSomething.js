export default function filterW(givenArr) {
    var result = [];


    givenArr.forEach(manuf => {
        var found = false;

        for (let i = 0; i < result.length; i++)
            // an additional check is necessary because 'otherManufs' from 'Manufacturers.component.js' might be the same as the passed array and the client will definitely not remove something from otherManufs whenever available manufacturers change.
            if (result[i].toLowerCase() === manuf.toLowerCase()) {
                found = true;
                break;
            }


        if (!found && manuf !== "")
        result.push(manuf)
    });

    return result;
}

