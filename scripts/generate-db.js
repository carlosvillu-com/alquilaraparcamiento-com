var request = require('request')
var csv = require('fast-csv')
var _ = require('underscore')
var _s = require('underscore.string')

var PROVINCIES = [
'A CORUÑA/LA CORUÑA', 'ALAVA/ARABA', 'ALBACETE', 'ALICANTE/ALACANT', 'ALMERÍA', 'ASTURIAS', 'AVILA', 'BADAJOZ', 'BARCELONA',
'BURGOS', 'CÁCERES', 'CÁDIZ', 'CANTABRIA', 'CASTELLÓN/CASTELLÓ', 'CEUTA', 'CIUDAD REAL', 'CUENCA', 'CÓRDOBA', 'GIRONA/GERONA',
'GRANADA', 'GUADALAJARA', 'GUIPUZKOA/GUIPÚZCOA', 'HUELVA', 'HUESCA', 'ILLES BALEARS/I. BALEARES', 'JAÉN', 'LA RIOJA', 'LAS PALMAS',
'LEÓN', 'LLEIDA/LÉRIDA', 'LUGO', 'MÁLAGA', 'MADRID', 'MELILLA', 'MURCIA', 'NAVARRA', 'OURENSE/ORENSE', 'PALENCIA', 'PONTEVEDRA',
'SALAMANCA', 'SEGOVIA', 'SEVILLA', 'SORIA', 'STA CRUZ DE TENERIFE', 'TARRAGONA', 'TERUEL', 'TOLEDO', 'VALENCIA', 'VALLADOLID',
'VIZCAYA/BIZKAIA', 'ZAMORA', 'ZARAGOZA'
].map(function(provincie){ return _s.slugify(provincie) })

var FEATURES = [
  'piscina', 'terraza', 'lavadora', 
  'secadora', 'parket', 'chimenea',
  'horno', 'internet', 'mascotas'
]

var STREETS_CSV_URL = 'http://datosabiertos.malaga.eu/dataset/94c722a0-b86a-4508-8bc1-0979f78b3ac9/resource/85dba75d-1f78-4bc4-a0ff-c1584a461668/download/relacion-de-calles-por-sector-censal.txt'

module.exports = function () {
  return new Promise(function(resolve, reject){
    var propertiesByProvincie = {};
    var streamCSV = csv
      .parse()
      .on('data', function(data){
        var provincie = PROVINCIES[_.random(0, PROVINCIES.length - 1)]
        propertiesByProvincie[provincie] = propertiesByProvincie[provincie] || []
        propertiesByProvincie[provincie].push({
          provincie: provincie,
          street: data[2] + ' ' + data[1],
          features: _.range( 1, _.random(1, FEATURES.length ) ).map( function () { return FEATURES[_.random(1, FEATURES.length - 1 )] } ),
          price: _.random(60000, 300000)
        })
      })
      .on('end', function () {
        resolve(propertiesByProvincie)
      })
    request(STREETS_CSV_URL).pipe(streamCSV)
  });
}
