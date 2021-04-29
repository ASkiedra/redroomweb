// all functions return null if the text cannot be translated


// used in AllProducts filter, menu dropdown, BcAndLanguages to translate breadcrumbs
export default function translateMainCats(text) {
    console.log(text)
    switch (text.toUpperCase()) {
        case "DAY SYSTEMS":
            text = "DIENOS SISTEMOS";
            break;

        case "DINING ROOM FURNITURE":
            text = "SVETAINĖS IR VALGOMOJO BALDAI";
            break;

        case "BEDROOM FURNITURE":
            text = "MIEGAMOJO BALDAI";
            break;

        case "WARDROBE SYSTEMS":
            text = "SPINTŲ SISTEMOS";
            break;

        // necessary for 'AllProducts'
        case "OUTDOOR FURNITURE AND ACCESSORIES":
            text = "LAUKO BALDAI IR AKSESUARAI";
            break;

        default:
            text = null;
    }

    return text;
}

// used in menu dropdown, AllProducts filter, BcAndLanguages to translate breadcrumbs
export const translateSubCats = (text) => {
    switch (text.toUpperCase()) {
        case "SALON FURNITURE SYSTEMS":
            text = "SVETAINĖS IR TV BALDŲ SISTEMOS";
            break;

        case "LOUNGE CHAIRS":
            text = "POILSIO KĖDĖS";
            break;

        case "WORKPLACE FURNITURE":
            text = "DARBO VIETOS";
            break;

        case "BEDS":
            text = "LOVOS";
            break;

        case "INTERIOR":
            text = "INTERJERAS";
            break;

        case "BOOKSHELVES":
            text = "KNYGŲ LENTYNOS";
            break;

        case "BED":
            text = "LOVOS";
            break;

        case "SOFA BEDS":
            text = "SOFA LOVOS";
            break;

        case "CHAIRS":
            text = "KĖDĖS";
            break;

        case "SOFAS":
            text = "SOFOS";
            break;

        case "COFFEE TABLES":
            text = "KAVOS STALIUKAI";
            break;

        case "ARMCHAIRS":
            text = "FOTELIAI";
            break;


        case "POUFS":
            text = "SUOLIUKAI IR PUFAI";
            break;

        case "DINING TABLES":
            text = "VALGOMOJO STALAI";
            break;

        case "INDIVIDUALLY PLANNED WARDROBES":
            text = "INDIVIDUALIAI PROJEKTUOJAMOS DRABUŽINĖS";
            break;


        case "CLOTHING HANGERS":
            text = "RŪBŲ KABYKLOS";
            break;


        case "SIDEBOARDS":
            text = "INDAUJOS";
            break;


        case "BEDSIDE CABINETS":
            text = "SPINTELĖS PRIE LOVOS";
            break;


        case "CHESTS OF DRAWERS":
            text = "KOMODOS";
            break;


        case "BEDROOM BENCHES":
            text = "SUOLAI PRIE LOVOS";
            break;

        case "SUNBEDS":
            text = "GULTAI";
            break;


        case "TABLES":
            text = "STALAI";
            break;


        case "BASKETS":
            text = "KREPŠIAI";
            break;

        case "OUTDOOR FURNITURE AND ACCESSORIES":
            text = "LAUKO BALDAI IR AKSESUARAI";
            break;

        default:
            text = null;
            break;
    }

    return text;
}

// used in BcAndLanguages to translate breadcrumbs
export const translateMainItems = (text) => {
    switch (text.toUpperCase()) {
        case "CONTACTS":
            text = "KONTAKTAI";
            break;

        case "MANUFACTURERS":
            text = "GAMINTOJAI";
            break;

        case "INTERIOR":
            text = "INTERJERAS";
            break;

        case "PRODUCTS":
            text = "PRODUKTAI";
            break;

        case "PRIVACY POLICY":
            text = "PRIVATUMO POLITIKA";
            break;

        case "INQUIRE":
            text = "SIŲSTI UŽKLAUSĄ";
            break;

        case "DELIVERY":
            text = "PRISTATYMO SĄLYGOS IR TERMINAI";
            break;

        default:
            text = null;
            break;
    }

    return text;
}