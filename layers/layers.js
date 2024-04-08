var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ElectoralDistricts_3 = new ol.format.GeoJSON();
var features_ElectoralDistricts_3 = format_ElectoralDistricts_3.readFeatures(json_ElectoralDistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectoralDistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectoralDistricts_3.addFeatures(features_ElectoralDistricts_3);
var lyr_ElectoralDistricts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectoralDistricts_3, 
                style: style_ElectoralDistricts_3,
                interactive: true,
    title: 'Electoral Districts<br />\
    <img src="styles/legend/ElectoralDistricts_3_0.png" /> BARRACKPORE WEST<br />\
    <img src="styles/legend/ElectoralDistricts_3_1.png" /> BRONTE<br />\
    <img src="styles/legend/ElectoralDistricts_3_2.png" /> DEBE EAST/L\'ESPERANCE/UNION HALL<br />\
    <img src="styles/legend/ElectoralDistricts_3_3.png" /> DEBE SOUTH<br />\
    <img src="styles/legend/ElectoralDistricts_3_4.png" /> LA FORTUNE/DEBE NORTH<br />\
    <img src="styles/legend/ElectoralDistricts_3_5.png" /> LA ROMAINE<br />\
    <img src="styles/legend/ElectoralDistricts_3_6.png" /> PALMISTE/HERMITAGE<br />\
    <img src="styles/legend/ElectoralDistricts_3_7.png" /> PENAL<br />\
    <img src="styles/legend/ElectoralDistricts_3_8.png" /> QUINAM/ MORNE DIABLO<br />\
    <img src="styles/legend/ElectoralDistricts_3_9.png" /> ROCHARD/BARRACKPORE EAST<br />'
        });
var format_Roads_4 = new ol.format.GeoJSON();
var features_Roads_4 = format_Roads_4.readFeatures(json_Roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_4.addFeatures(features_Roads_4);
var lyr_Roads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_4, 
                style: style_Roads_4,
                interactive: true,
                title: '<img src="styles/legend/Roads_4.png" /> Roads'
            });
var format_WaterCourses_5 = new ol.format.GeoJSON();
var features_WaterCourses_5 = format_WaterCourses_5.readFeatures(json_WaterCourses_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterCourses_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterCourses_5.addFeatures(features_WaterCourses_5);
var lyr_WaterCourses_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterCourses_5, 
                style: style_WaterCourses_5,
                interactive: true,
                title: '<img src="styles/legend/WaterCourses_5.png" /> Water Courses'
            });
var format_2017FloodCounts_6 = new ol.format.GeoJSON();
var features_2017FloodCounts_6 = format_2017FloodCounts_6.readFeatures(json_2017FloodCounts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017FloodCounts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017FloodCounts_6.addFeatures(features_2017FloodCounts_6);
var lyr_2017FloodCounts_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017FloodCounts_6, 
                style: style_2017FloodCounts_6,
                interactive: true,
    title: '2017 Flood Counts<br />\
    <img src="styles/legend/2017FloodCounts_6_0.png" /> 1 - 5<br />\
    <img src="styles/legend/2017FloodCounts_6_1.png" /> 6 - 10<br />\
    <img src="styles/legend/2017FloodCounts_6_2.png" /> 11 - 20<br />\
    <img src="styles/legend/2017FloodCounts_6_3.png" /> 21 - 30<br />\
    <img src="styles/legend/2017FloodCounts_6_4.png" /> 31 - 55<br />'
        });
var format_2018FloodCounts_7 = new ol.format.GeoJSON();
var features_2018FloodCounts_7 = format_2018FloodCounts_7.readFeatures(json_2018FloodCounts_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018FloodCounts_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018FloodCounts_7.addFeatures(features_2018FloodCounts_7);
var lyr_2018FloodCounts_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018FloodCounts_7, 
                style: style_2018FloodCounts_7,
                interactive: true,
    title: '2018 Flood Counts<br />\
    <img src="styles/legend/2018FloodCounts_7_0.png" /> 0 - 2<br />\
    <img src="styles/legend/2018FloodCounts_7_1.png" /> 2 - 5<br />\
    <img src="styles/legend/2018FloodCounts_7_2.png" /> 5 - 9.6<br />\
    <img src="styles/legend/2018FloodCounts_7_3.png" /> 9.6 - 14.8<br />\
    <img src="styles/legend/2018FloodCounts_7_4.png" /> 14.8 - 66<br />'
        });
var format_2019FloodCounts_8 = new ol.format.GeoJSON();
var features_2019FloodCounts_8 = format_2019FloodCounts_8.readFeatures(json_2019FloodCounts_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019FloodCounts_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019FloodCounts_8.addFeatures(features_2019FloodCounts_8);
var lyr_2019FloodCounts_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019FloodCounts_8, 
                style: style_2019FloodCounts_8,
                interactive: true,
    title: '2019 Flood Counts<br />\
    <img src="styles/legend/2019FloodCounts_8_0.png" /> 1 - 5<br />\
    <img src="styles/legend/2019FloodCounts_8_1.png" /> 6 - 10<br />\
    <img src="styles/legend/2019FloodCounts_8_2.png" /> 11 - 20<br />\
    <img src="styles/legend/2019FloodCounts_8_3.png" /> 21 - 35<br />\
    <img src="styles/legend/2019FloodCounts_8_4.png" /> 36 - 60<br />'
        });
var format_2020FloodCounts_9 = new ol.format.GeoJSON();
var features_2020FloodCounts_9 = format_2020FloodCounts_9.readFeatures(json_2020FloodCounts_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020FloodCounts_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020FloodCounts_9.addFeatures(features_2020FloodCounts_9);
var lyr_2020FloodCounts_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020FloodCounts_9, 
                style: style_2020FloodCounts_9,
                interactive: true,
                title: '<img src="styles/legend/2020FloodCounts_9.png" /> 2020 Flood Counts'
            });
var format_2021FloodCounts_10 = new ol.format.GeoJSON();
var features_2021FloodCounts_10 = format_2021FloodCounts_10.readFeatures(json_2021FloodCounts_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021FloodCounts_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021FloodCounts_10.addFeatures(features_2021FloodCounts_10);
var lyr_2021FloodCounts_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021FloodCounts_10, 
                style: style_2021FloodCounts_10,
                interactive: true,
    title: '2021 Flood Counts<br />\
    <img src="styles/legend/2021FloodCounts_10_0.png" /> 1 - 2<br />\
    <img src="styles/legend/2021FloodCounts_10_1.png" /> 3 - 4<br />\
    <img src="styles/legend/2021FloodCounts_10_2.png" /> 5 - 6<br />'
        });
var format_2022FloodCounts_11 = new ol.format.GeoJSON();
var features_2022FloodCounts_11 = format_2022FloodCounts_11.readFeatures(json_2022FloodCounts_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022FloodCounts_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022FloodCounts_11.addFeatures(features_2022FloodCounts_11);
var lyr_2022FloodCounts_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022FloodCounts_11, 
                style: style_2022FloodCounts_11,
                interactive: true,
    title: '2022 Flood Counts<br />\
    <img src="styles/legend/2022FloodCounts_11_0.png" /> 1 - 2<br />\
    <img src="styles/legend/2022FloodCounts_11_1.png" /> 3 - 9<br />\
    <img src="styles/legend/2022FloodCounts_11_2.png" /> 10 - 15<br />\
    <img src="styles/legend/2022FloodCounts_11_3.png" /> 16 - 20<br />\
    <img src="styles/legend/2022FloodCounts_11_4.png" /> 21 - 27<br />'
        });
var format_2023FloodCounts_12 = new ol.format.GeoJSON();
var features_2023FloodCounts_12 = format_2023FloodCounts_12.readFeatures(json_2023FloodCounts_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023FloodCounts_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023FloodCounts_12.addFeatures(features_2023FloodCounts_12);
var lyr_2023FloodCounts_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2023FloodCounts_12, 
                style: style_2023FloodCounts_12,
                interactive: true,
    title: '2023 Flood Counts<br />\
    <img src="styles/legend/2023FloodCounts_12_0.png" /> 1 - 2<br />\
    <img src="styles/legend/2023FloodCounts_12_1.png" /> 3 - 5<br />\
    <img src="styles/legend/2023FloodCounts_12_2.png" /> 6 - 10<br />\
    <img src="styles/legend/2023FloodCounts_12_3.png" /> 11 - 20<br />\
    <img src="styles/legend/2023FloodCounts_12_4.png" /> 21 - 30<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_ElectoralDistricts_3.setVisible(true);lyr_Roads_4.setVisible(true);lyr_WaterCourses_5.setVisible(true);lyr_2017FloodCounts_6.setVisible(true);lyr_2018FloodCounts_7.setVisible(true);lyr_2019FloodCounts_8.setVisible(true);lyr_2020FloodCounts_9.setVisible(true);lyr_2021FloodCounts_10.setVisible(true);lyr_2022FloodCounts_11.setVisible(true);lyr_2023FloodCounts_12.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,lyr_ElectoralDistricts_3,lyr_Roads_4,lyr_WaterCourses_5,lyr_2017FloodCounts_6,lyr_2018FloodCounts_7,lyr_2019FloodCounts_8,lyr_2020FloodCounts_9,lyr_2021FloodCounts_10,lyr_2022FloodCounts_11,lyr_2023FloodCounts_12];
lyr_ElectoralDistricts_3.set('fieldAliases', {'fid': 'fid', 'ED_2017': 'ED_2017', 'Councillor': 'Councillor', });
lyr_Roads_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_WaterCourses_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_2017FloodCounts_6.set('fieldAliases', {'fid': 'fid', 'Street Name': 'Street Name', 'Number of flood incidents reported': 'Number of flood incidents reported', 'Year': 'Year', });
lyr_2018FloodCounts_7.set('fieldAliases', {'fid': 'fid', 'Flood_Year': 'Flood_Year', 'Number': 'Number', 'StreetName': 'StreetName', });
lyr_2019FloodCounts_8.set('fieldAliases', {'fid': 'fid', 'Flood_Year': 'Flood_Year', 'StreetName': 'StreetName', 'Number_Hm': 'Number_Hm', });
lyr_2020FloodCounts_9.set('fieldAliases', {'fid': 'fid', 'Steet Name': 'Steet Name', 'Number of flooding incidents reported': 'Number of flooding incidents reported', 'Year': 'Year', });
lyr_2021FloodCounts_10.set('fieldAliases', {'fid': 'fid', 'Street Name': 'Street Name', 'Number of flooding incidents reported': 'Number of flooding incidents reported', 'Year': 'Year', });
lyr_2022FloodCounts_11.set('fieldAliases', {'fid': 'fid', 'Street Name': 'Street Name', 'Number of Flood Incidents Reported': 'Number of Flood Incidents Reported', 'Year': 'Year', });
lyr_2023FloodCounts_12.set('fieldAliases', {'fid': 'fid', 'Street Name': 'Street Name', 'Number of flooding incidents reported': 'Number of flooding incidents reported', 'Year': 'Year', });
lyr_ElectoralDistricts_3.set('fieldImages', {'fid': 'TextEdit', 'ED_2017': 'TextEdit', 'Councillor': 'TextEdit', });
lyr_Roads_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_WaterCourses_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_2017FloodCounts_6.set('fieldImages', {'fid': 'TextEdit', 'Street Name': 'TextEdit', 'Number of flood incidents reported': 'Range', 'Year': 'Range', });
lyr_2018FloodCounts_7.set('fieldImages', {'fid': 'TextEdit', 'Flood_Year': 'Range', 'Number': 'Range', 'StreetName': 'TextEdit', });
lyr_2019FloodCounts_8.set('fieldImages', {'fid': 'TextEdit', 'Flood_Year': 'TextEdit', 'StreetName': 'TextEdit', 'Number_Hm': 'TextEdit', });
lyr_2020FloodCounts_9.set('fieldImages', {'fid': 'TextEdit', 'Steet Name': 'TextEdit', 'Number of flooding incidents reported': 'TextEdit', 'Year': 'TextEdit', });
lyr_2021FloodCounts_10.set('fieldImages', {'fid': 'TextEdit', 'Street Name': 'TextEdit', 'Number of flooding incidents reported': 'TextEdit', 'Year': 'Range', });
lyr_2022FloodCounts_11.set('fieldImages', {'fid': 'TextEdit', 'Street Name': 'TextEdit', 'Number of Flood Incidents Reported': 'Range', 'Year': 'Range', });
lyr_2023FloodCounts_12.set('fieldImages', {'fid': 'TextEdit', 'Street Name': 'TextEdit', 'Number of flooding incidents reported': 'Range', 'Year': 'Range', });
lyr_ElectoralDistricts_3.set('fieldLabels', {'fid': 'header label', 'ED_2017': 'header label', 'Councillor': 'header label', });
lyr_Roads_4.set('fieldLabels', {'fid': 'header label', 'name': 'header label', });
lyr_WaterCourses_5.set('fieldLabels', {'fid': 'header label', 'Name': 'header label', });
lyr_2017FloodCounts_6.set('fieldLabels', {'fid': 'header label', 'Street Name': 'header label', 'Number of flood incidents reported': 'header label', 'Year': 'header label', });
lyr_2018FloodCounts_7.set('fieldLabels', {'fid': 'header label', 'Flood_Year': 'header label', 'Number': 'header label', 'StreetName': 'header label', });
lyr_2019FloodCounts_8.set('fieldLabels', {'fid': 'header label', 'Flood_Year': 'header label', 'StreetName': 'header label', 'Number_Hm': 'header label', });
lyr_2020FloodCounts_9.set('fieldLabels', {'fid': 'header label', 'Steet Name': 'header label', 'Number of flooding incidents reported': 'header label', 'Year': 'header label', });
lyr_2021FloodCounts_10.set('fieldLabels', {'fid': 'header label', 'Street Name': 'header label', 'Number of flooding incidents reported': 'header label', 'Year': 'header label', });
lyr_2022FloodCounts_11.set('fieldLabels', {'fid': 'header label', 'Street Name': 'header label', 'Number of Flood Incidents Reported': 'header label', 'Year': 'header label', });
lyr_2023FloodCounts_12.set('fieldLabels', {'fid': 'header label', 'Street Name': 'header label', 'Number of flooding incidents reported': 'header label', 'Year': 'header label', });
lyr_2023FloodCounts_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});