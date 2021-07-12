import Products from './products';


export default function filterLowercase(givenArr) {
    if (typeof givenArr !== 'object' || givenArr.length === 0)
        return [];

    // extra security with 'const' instead of 'let'. pushing to array is possible but accidentally reassigning the value to a random value is prohibited
    const result = [];

    givenArr.forEach(item => {
        let found = false;

        for (let i = 0; i < result.length; i++)
            if (result[i].toLowerCase() === item.toLowerCase()) {
                found = true;
                break;
            }


        // if an item isn't empty and it wasn't found in the array, push it to the array of filtered items
        if (!found && item)
            result.push(item)
    });

    return result;
}

// Set so the passed values are pre-filtered thus easier and faster to filter.
export const mainCategoriesArr = filterLowercase([...new Set(Products.map(product => product.mainCategory))]);
export const subCategoriesArr = filterLowercase([...new Set(Products.map(product => product.subCategory))]);
export const manufacturersArr = filterLowercase([...new Set(Products.map(product => product.manufacturer))]);