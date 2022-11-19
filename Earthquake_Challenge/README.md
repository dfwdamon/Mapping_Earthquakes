# Mapping_Earthquakes

### Overview
This app and repository utilizes the Leaflet.js (javascript) application programing Interface (API) to populate a geographical map with GeoJSON earthquake data from a URL. An interactive map of earthquakes with their magnitude and location was created to present geological activity.

Earthquake data was obtained from the 
US geological survey website "earthquake.usgs.gov".  Popup markers are shown which represent earthquake magnitude by diameter and color of the marker and a legend for reference.  To show the relationship of the earthquakes, fault lines were added for the tectnoice plates to reveal location and frequency of occurrence of earthquations on the geographical map.  For interactivity, the app includes three map views with the ability to toggle earthquakes, tectonic plates and major events.

### Summary
The interactive map of earthquakes includes tectnoci plate boundary data published by Geochemistry Geophysics Geosystems, and as mentioned, the earthquake data is retrieved via and API from the US Geological GeoJSON dataset of recent USGS Magnitude 4.5+ Earthquakes from the past week by extracting and loading as a GeoJSON file.  The Leaflet javascript libraries from MapBox provide for the creation of the interactive mapping and of layers and controls. The map can be toggled to add or remove sets of data for comparison and analysis.  


