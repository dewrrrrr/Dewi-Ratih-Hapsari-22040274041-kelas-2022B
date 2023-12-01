var wms_layers = [];

var lyr_potonganmelawi_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "potongan melawi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/potonganmelawi_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12369163.521840, -146862.566590, 12519054.022745, -16088.152064]
                            })
                        });
var format_vektorklasifikasimelawi_1 = new ol.format.GeoJSON();
var features_vektorklasifikasimelawi_1 = format_vektorklasifikasimelawi_1.readFeatures(json_vektorklasifikasimelawi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vektorklasifikasimelawi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vektorklasifikasimelawi_1.addFeatures(features_vektorklasifikasimelawi_1);
var lyr_vektorklasifikasimelawi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vektorklasifikasimelawi_1, 
                style: style_vektorklasifikasimelawi_1,
                interactive: true,
    title: 'vektorklasifikasi melawi<br />\
    <img src="styles/legend/vektorklasifikasimelawi_1_0.png" /> 1<br />\
    <img src="styles/legend/vektorklasifikasimelawi_1_1.png" /> 2<br />\
    <img src="styles/legend/vektorklasifikasimelawi_1_2.png" /> 3<br />\
    <img src="styles/legend/vektorklasifikasimelawi_1_3.png" /> 4<br />\
    <img src="styles/legend/vektorklasifikasimelawi_1_4.png" /> 5<br />\
    <img src="styles/legend/vektorklasifikasimelawi_1_5.png" /> 6<br />\
    <img src="styles/legend/vektorklasifikasimelawi_1_6.png" /> 7<br />\
    <img src="styles/legend/vektorklasifikasimelawi_1_7.png" /> <br />'
        });
var format_KONTUR_2 = new ol.format.GeoJSON();
var features_KONTUR_2 = format_KONTUR_2.readFeatures(json_KONTUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONTUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONTUR_2.addFeatures(features_KONTUR_2);
var lyr_KONTUR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KONTUR_2, 
                style: style_KONTUR_2,
                interactive: true,
    title: 'KONTUR<br />\
    <img src="styles/legend/KONTUR_2_0.png" /> 445.000000000000000<br />\
    <img src="styles/legend/KONTUR_2_1.png" /> 890.000000000000000<br />\
    <img src="styles/legend/KONTUR_2_2.png" /> 1335.000000000000000<br />\
    <img src="styles/legend/KONTUR_2_3.png" /> <br />'
        });

lyr_potonganmelawi_0.setVisible(true);lyr_vektorklasifikasimelawi_1.setVisible(true);lyr_KONTUR_2.setVisible(true);
var layersList = [lyr_potonganmelawi_0,lyr_vektorklasifikasimelawi_1,lyr_KONTUR_2];
lyr_vektorklasifikasimelawi_1.set('fieldAliases', {'ID': 'ID', 'Z': 'Z', });
lyr_KONTUR_2.set('fieldAliases', {'ID': 'ID', 'Z': 'Z', });
lyr_vektorklasifikasimelawi_1.set('fieldImages', {'ID': '', 'Z': '', });
lyr_KONTUR_2.set('fieldImages', {'ID': 'Range', 'Z': '', });
lyr_vektorklasifikasimelawi_1.set('fieldLabels', {'ID': 'no label', 'Z': 'no label', });
lyr_KONTUR_2.set('fieldLabels', {'ID': 'no label', 'Z': 'no label', });
lyr_KONTUR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});