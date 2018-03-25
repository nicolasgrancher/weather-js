/**
 * Get apparent temperature. Use wind chill or heat index.
 *
 * @param Tc temperature in celsius
 * @param Vkmh wind speed in km/h
 * @param R relative humidity
 * @param P pressure
 * @returns {number}
 */
function apparentTemperature(Tc, Vkmh, R, P) {
    if (Tc < 10) {
        return this.windChill(Tc, Vkmh);
    }

    return this.heatIndex(Tc, R, P);
}

/**
 * Wind chill calculation.
 * @see https://en.wikipedia.org/wiki/Wind_chill
 *
 * @param Tc temperature in celsius
 * @param Vkmh wind speed in km/h
 * @returns {number}
 */
function windChill(Tc, Vkmh) {
    if (Tc >= 10)
        return Tc;

    var Rc;

    if (Vkmh >= 4.8 && Vkmh <= 177) {
        Rc = 13.12 + 0.6215 * Tc + (0.3965 * Tc - 11.37) * Math.pow(Vkmh, 0.16);
    } else if (Vkmh < 4.8) {
        Rc = Tc + 0.2 * (0.1345 * Tc - 1.59) * Vkmh;
    } else {
        Rc = Tc;
    }

    return Rc;
}

/**
 * Heat index calculation.
 * @see https://en.wikipedia.org/wiki/Heat_index
 *
 * @param Tc temperature in celsius
 * @param R relative humidity
 * @param P pressure
 * @returns {number}
 */
function heatIndex(Tc, R, P) {
    if (P < 16) {
        return Tc;
    }

    if (Tc < 27 || R < 0.40 || dewPoint(Tc, R) < 12) {
        return Tc;
    }

    var c1 = -42.379;
    var c2 = 2.04901523;
    var c3 = 10.14333127;
    var c4 = -0.22475541;
    var c5 = -6.83783 * 0.001;
    var c6 = -5.481717 * 0.01;
    var c7 = 1.22874 * 0.001;
    var c8 = 8.5282 * 0.0001;
    var c9 = -1.99 * 0.000001;

    var Tf = this.celsiusToFahrenheit(Tc);

    var HI = c1 + c2 * Tf + c3 * R + c4 * Tf * R + c5 * Tf * Tf + c6 * R * R + c7 * Tf * Tf * R + c8 * Tf * R * R + c9 * Tf * Tf * R * R;

    return this.fahrenheitToCelsius(HI);
}

/**
 * Dew point calculation.
 * @see https://en.wikipedia.org/wiki/Dew_point
 *
 * @param Tc temperature in celsius
 * @param R relative humidity
 * @returns {number}
 */
function dewPoint(Tc, R) {
    if (Tc < 0 || Tc > 60) {
        return Tc;
    }

    if (R < 0.01 || R > 1) {
        return Tc;
    }

    var a = 17.27;
    var b = 237.7;

    var alphaTR = ((a * Tc) / (b + Tc)) + Math.log(R);

    var Tr = (b * alphaTR) / (a - alphaTR);

    if (Tr < 0 || Tr > 50) {
        return Tc;
    }

    return Tr;
}

/**
 * Convert temperature in fahrenheit to celsius.
 *
 * @param Tf temperature in fahrenheit
 * @returns {number}
 */
function fahrenheitToCelsius(Tf) {
    return (Tf - 32) / 1.8;
}

/**
 * Convert temperature in celsius to fahrenheit.
 *
 * @param Tc temperature in celsius
 * @returns {number}
 */
function celsiusToFahrenheit(Tc) {
    return (Tc * 1.8) + 32;
}
