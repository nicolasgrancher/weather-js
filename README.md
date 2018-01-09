# WeatherJS

## Overview
WeatherJS is a set of javascript functions to work on weather and pollution data.

## Features
### Get apparent temperature
* apparentTemperature(Tc, Vkmh, R, P) : Get apparent temperature. Use wind chill or heat index calculation based on temperature.

  * Tc : temperature in celsius
  * Vkmh : wind speed in km/h
  * R : relative humidity (between 0 and 1)
  * P : pressure in hPa

* heatIndex(Tc, R, P) : Heat index calculation.

  * Tc : temperature in celsius
  * R : relative humidity (between 0 and 1)
  * P : pressure in hPa

* windChill(Tc, Vkmh) : Wind chill calculation.
  * Tc : temperature in celsius
  * Vkmh : wind speed in km/h

* dewPoint(Tc, R) : Dew point calculation.
  * Tc : temperature in celsius
  * R : relative humidity (between 0 and 1)

### Conversion
* fahrenheitToCelsius(Tf)
  * Tf : temperature in fahrenheit.
* celsiusToFahrenheit(Tc)
  * Tc : temperature in celsius.

### Get pollution [ATMO index](https://fr.m.wikipedia.org/wiki/Indice_de_qualit%C3%A9_de_l%27air#Indice_Atmo)
* getAtmoIndex(O3, SO2, NO2, PM10) : Get french pollution index ATMO
  * O3 : O3 value in µg/m3
  * SO2 : SO2 value in µg/m3
  * NO2 : NO2 value in µg/m3
  * PM10 : PM10 value in µg/m3
