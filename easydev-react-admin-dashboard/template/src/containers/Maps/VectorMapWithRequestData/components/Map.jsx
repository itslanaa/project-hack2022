import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import { Card, CardBody, Col } from 'reactstrap';
import { transparentize } from 'polished';
import maps from '../../VectorMap/components/world';

// you can find demos here: https://www.amcharts.com/demos

const strokeColor = '#f67513';
const mapMainColor = '#f67513';
const lightGrayColor = '#F2F2F2';
const lightTextColor = '#93A2AF';
const whiteColor = '#FFFFFF';

const heatRule = {
  property: 'fill',
  min: am4core.color('#ffffff'),
};

const Map = ({ mapData }) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    const map = am4core.create('chartdiv', am4maps.MapChart);

    map.geodata = maps;

    map.centerMapOnZoomOut = false;
    // Set projection
    map.projection = new am4maps.projections.Miller();

    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

    heatRule.max = am4core.color(mapMainColor);
    heatRule.target = polygonSeries.mapPolygons.template;

    polygonSeries.heatRules.push(heatRule);

    polygonSeries.useGeodata = true;
    const label = map.createChild(am4core.Label);
    label.text = t('vector_map.cases_of_infection');
    label.fontSize = 12;
    label.align = 'center';
    label.valign = 'bottom';
    label.fill = am4core.color(lightTextColor);
    label.padding(0, 0, 50, 0);
    const noDataLabel = map.createChild(am4core.Label);
    noDataLabel.text = t('no_available_data');
    noDataLabel.fontSize = 12;
    noDataLabel.align = 'center';
    noDataLabel.valign = 'middle';
    noDataLabel.padding(10, 20, 10, 20);
    noDataLabel.background.fill = am4core.color(lightGrayColor);
    noDataLabel.background.stroke = am4core.color('#000000');
    noDataLabel.fillOpacity = mapData === null || mapData.length === 0 ? 1 : 0;
    noDataLabel.background.strokeOpacity = mapData === null || mapData.length === 0 ? 1 : 0;
    const heatLegend = map.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.padding(0, 20, 12, 20);
    heatLegend.width = 300;
    heatLegend.valueAxis.renderer.minGridDistance = 60;
    heatLegend.valueAxis.numberFormatter.numberFormat = '#.a';
    heatLegend.valueAxis.renderer.labels.template.adapter.add(
      'text', text => (mapData && mapData.length > 0 ? text : ''),
    );
    heatLegend.align = 'center';
    heatLegend.valign = 'bottom';
    heatLegend.minColor = '#FFF';
    heatLegend.maxColor = mapMainColor;
    heatLegend.valueAxis.tooltip.background.fill = am4core.color(whiteColor);
    heatLegend.valueAxis.tooltip.background.stroke = am4core.color(mapMainColor);
    heatLegend.valueAxis.tooltip.label.fill = am4core.color('#000');
    heatLegend.stroke = am4core.color(lightTextColor);
    heatLegend.valueAxis.strokeWidth = 0;

    const polygonTemplate = polygonSeries.mapPolygons.template;

    let minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.label.paddingTop = -15;

    let maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.label.paddingTop = -15;

    heatLegend.valueAxis.renderer.labels.template.adapter.add('text', () => (''));

    polygonSeries.events.on('datavalidated', () => {
      const min = heatLegend.series.dataItem.values.value.low;
      minRange = heatLegend.valueAxis.axisRanges.getIndex(0);
      minRange.value = min;
      minRange.label.text = `${min}`;

      const max = heatLegend.series.dataItem.values.value.high;
      maxRange = heatLegend.valueAxis.axisRanges.getIndex(1);
      maxRange.value = max;
      maxRange.label.text = `${heatLegend.numberFormatter.format(max)}`;

      minRange.label.fill = am4core.color(lightTextColor);
      maxRange.label.fill = am4core.color(lightTextColor);

      if (min === max) {
        minRange.label.paddingRight = 300;
        maxRange.label.paddingLeft = 300;
      } else {
        minRange.label.paddingRight = 45;
        maxRange.label.paddingLeft = 45;
      }
    });

    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;
    polygonTemplate.fill = am4core.color('#f7f7f7');
    polygonTemplate.stroke = am4core.color('#999999');

    const tooltipFormatter = (target) => {
      const { dataContext } = target.dataItem;
      const textValue = dataContext.value >= 0 ? `${dataContext.value}` : '';
      return `${t(`vector_map.countries.${dataContext['hc-key']}`)}\n
      Cases: ${textValue !== '' ? textValue : 0}\n
      Deaths: ${dataContext.deaths ? dataContext.deaths : 0}\n
      Recovered: ${dataContext.recovered ? dataContext.recovered : 0}`;
    };

    polygonSeries.data = mapData ? [...mapData] : [];
    polygonTemplate.adapter.add('tooltipText', (text, target) => tooltipFormatter(target));
    polygonSeries.tooltip.getFillFromObject = false;
    polygonSeries.tooltip.background.fill = am4core.color(`${transparentize(0.2, '#FFF')}`);
    polygonSeries.tooltip.label.fill = am4core.color('#000');

    const handleHover = (mapPolygon) => {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(mapPolygon.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(mapPolygon.dataItem.value);
      } else {
        heatLegend.valueAxis.hideTooltip();
      }
    };

    polygonSeries.mapPolygons.template.events.on('over', (event) => {
      handleHover(event.target);
    });

    polygonSeries.mapPolygons.template.events.on('hit', (event) => {
      handleHover(event.target);
    });

    polygonSeries.mapPolygons.template.events.on('out', () => {
      heatLegend.valueAxis.hideTooltip();
    });

    const hs = polygonTemplate.states.create('hover');
    hs.properties.stroke = am4core.color(strokeColor);
    hs.properties.strokeWidth = 2;
    const zoomControl = new am4maps.ZoomControl();
    zoomControl.align = 'left';
    zoomControl.valign = 'middle';
    map.zoomControl = zoomControl;
  }, [t, mapData]);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('maps.vector_map.vector_world_map')}</h5>
          </div>
          <div id="chartdiv" style={{ width: '100%', height: '55vh' }} />
        </CardBody>
      </Card>
    </Col>
  );
};

Map.propTypes = {
  mapData: PropTypes.arrayOf(PropTypes.shape()),
};

Map.defaultProps = {
  mapData: [],
};

export default Map;
