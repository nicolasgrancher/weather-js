/**
 * Get french pollution index ATMO
 * @see https://fr.m.wikipedia.org/wiki/Indice_de_qualit%C3%A9_de_l%27air#Indice_Atmo
 *
 * @param O3 Ozonz
 * @param SO2 Dioxide de soufre
 * @param NO2 Dioxyde d'azote
 * @param PM10 Particules en suspension
 */
function getAtmoIndex(O3, SO2, NO2, PM10)
{
    var scale = [
        'Très bon',
        'Très bon',
        'Bon',
        'Bon',
        'Moyen',
        'Médiocre',
        'Médiocre',
        'Mauvais',
        'Mauvais',
        'Très mauvais'
    ];

    var O3scale = [
        [0, 29],
        [30, 54],
        [55, 79],
        [80, 104],
        [105, 129],
        [130, 149],
        [150, 179],
        [180, 209],
        [210, 239]
    ];

    var SO2scale = [
        [0, 39],
        [40, 79],
        [80, 119],
        [120, 159],
        [160, 199],
        [200, 249],
        [250, 299],
        [300, 399],
        [400, 499]
    ];

    var NO2scale = [
        [0, 29],
        [30, 54],
        [55, 84],
        [85, 109],
        [110, 134],
        [135, 164],
        [165, 199],
        [200, 274],
        [275, 399]
    ];

    var PM10scale = [
        [0, 6],
        [7, 13],
        [14, 20],
        [21, 27],
        [28, 34],
        [35, 41],
        [42, 49],
        [50, 64],
        [65, 79]
    ];

    var index = 1;

    index = getIndex(O3scale, O3, index);
    index = getIndex(SO2scale, SO2, index);
    index = getIndex(NO2scale, NO2, index);
    index = getIndex(PM10scale, PM10, index);

    return {
        'index': index,
        level : scale[index]
    };
}

/**
 *
 * @param scale
 * @param value
 * @param currentIndex
 * @returns {*}
 */
function getIndex(scale, value, currentIndex)
{
    for (var i=0 ; i<scale.length ; i++) {
        var item = scale[i];

        if (item[0] <= value && value <= item[1]) {
            if (i+1 > currentIndex) {
                currentIndex = i+1;
            }
            break;
        }
    }

    return currentIndex;
}