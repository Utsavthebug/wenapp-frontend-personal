import React, {Component} from 'react'
import {GoogleMap, InfoWindow, withGoogleMap} from 'react-google-maps'

const google = window.google
const GettingPropertiesExampleGoogleMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
    defaultCenter={props.center}
    zoom={props.zoom}
  >
    <InfoWindow defaultPosition={props.center}>
      <div className="gx-map-content">{props.content}</div>
    </InfoWindow>
  </GoogleMap>
))

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-properties
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class EventHandler extends Component {
  state = {
    zoom: 15,
    content: `Change the zoom level`,
  }

  handleMapMounted = this.handleMapMounted.bind(this)
  handleZoomChanged = this.handleZoomChanged.bind(this)

  handleMapMounted(map) {
    this._map = map
  }

  handleZoomChanged() {
    const nextZoom = this._map.getZoom()
    if (nextZoom !== this.state.zoom) {
      // Notice: Check zoom equality here,
      // or it will fire zoom_changed event infinitely
      this.setState({
        zoom: nextZoom,
        content: `Zoom: ${nextZoom}`,
      })
    }
  }

  render() {
    return (
      <GettingPropertiesExampleGoogleMap
        loadingElement={<div style={{height: `100%`}} />}
        containerElement={<div style={{height: `550px`}} />}
        mapElement={<div style={{height: `100%`}} />}
        onMapMounted={this.handleMapMounted}
        onZoomChanged={this.handleZoomChanged}
        center={new google.maps.LatLng(47.646935, -122.303763)}
        zoom={this.state.zoom}
        content={this.state.content}
      />
    )
  }
}
