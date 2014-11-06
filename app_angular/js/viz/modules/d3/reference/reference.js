// Not part of the project but just stuff to check out in browser when you need a refresher




// Nests

var raw_country_data = [{
        "countryName": "Andorra",
      "continent": "EU",
      "languages": "ca",
      "areaInSqKm": "468.0",
      "population": "84000"
    },
    {"countryName": "United Arab Emirates",
      "continent": "AS",
      "languages": "ar-AE,fa,en,hi,ur",
      "areaInSqKm": "82880.0",
      "population": "4975593"
    },
    {"countryName": "Antigua and Barbuda",
      "continent": "NA",
      "languages": "en-AG",
      "areaInSqKm": "443.0",
      "population": "86754"
    },
    {"countryName": "Anguilla",
      "continent": "NA",
      "languages": "en-AI",
      "areaInSqKm": "102.0",
      "population": "13254"
    },
    {"countryName": "Albania",
      "continent": "EU",
      "languages": "sq,el",
      "areaInSqKm": "28748.0",
      "population": "2986952"
    },
    {"countryName": "Armenia",
      "continent": "AS",
      "languages": "hy",
      "areaInSqKm": "29800.0",
      "population": "2968000"
    }
   ]



var data = d3.nest()
     .key(function(d) { return d.continent })
     .sortKeys(d3.ascending)
     .entries(raw_country_data);

// create array of three object keyed on continent with related array of values

var nest = d3.nest()
   .key(function(d) { return d.continent })
   .sortValues(d3.ascending)
   .entries(raw_country_data);



// nest.rollup

var data = d3.nest()
   .key(function(d) { return d.continent })
   .sortKeys(d3.ascending)
   .rollup(function(d) {
     return {
       area: d3.sum(d, function(g) {
         return +g.areaInSqKm;
       })
     }
   })
   .entries(raw_country_data);


// nest.map. If this is specified, then it can return a different type, such as a d3.map, rather than a simple object.

var data = d3.nest()
    .key(function(d) { return d.continent })
    .sortKeys(d3.ascending)
    .rollup(function(d) {
      return {
        area: d3.sum(d, function(g) {
          return +g.areaInSqKm;
        })
      }
    })
    .map(raw_country_data);

/*
 *
 * SCALES
 *
 * Ensure data fit nices in your viewport
 *
 */

var scale = d3.scale.linear()
   .domain([0, 2])
   .range([0, 500]);

scale(1) // 250
