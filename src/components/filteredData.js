import Products from '../components/products';


export default function filterLowercase(givenArr) {
    var result = [];

    givenArr.forEach(item => {
        var found = false;

        for (let i = 0; i < result.length; i++)
            // an additional check is necessary because 'otherManufs' from 'Manufacturers.component.js' might be the same as the passed array and the client will definitely not remove something from otherManufs whenever available manufacturers change.
            // if there are problems with case sensitivity - this function helps out a lot
            if (result[i].toLowerCase() === item.toLowerCase()) {
                found = true;
                break;
            }


        if (!found && item !== "")
            result.push(item)
    });

    return result;
}

export const mainCategoriesArr = filterLowercase([...new Set(Products.map(product => product.mainCategory))]);
export const subCategoriesArr = filterLowercase([...new Set(Products.map(product => product.subCategory))]);
export const manufacturersArr = filterLowercase([...new Set(Products.map(product => product.manufacturer))]);
console.log(manufacturersArr)