# UK Climate Visualizer

An interactive visualization tool that displays UK climate data and sea level rise projections with real-time analysis of vulnerable coastal areas.

## 🌊 Features

- **Interactive UK Map**: Terrain-based map with optimized UK bounds and zoom levels
- **Real Climate Data**: Integration with Met Office climate data
- **Sea Level Rise Projections**: Multiple IPCC climate scenarios (Historical, Moderate, Severe)
- **Vulnerable Area Analysis**: Visual identification of at-risk coastal regions
- **Flood Zone Visualization**: Dynamic flooding animations showing submerged areas
- **House Submersion Models**: Regional house flooding animations for different areas
- **Time-based Animation**: Play through years 1993-2050 with smooth transitions
- **Population Impact**: Calculate and display population at risk statistics

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- Modern web browser

### Installation

1. Clone this repository:
```bash
git clone https://github.com/catrionawalsh27/uk-climate-visualizer.git
cd uk-climate-visualizer
```

2. Start the server:
```bash
npm start
# or
node server.js
```

3. Open your browser and navigate to:
```
http://localhost:3045
```

## 📊 Data Sources

- **Sea Level Data**: Historical data from Met Office Climate Dashboard
- **Climate Projections**: Based on IPCC scenarios (RCP4.5, RCP8.5)
- **Geographic Data**: OpenTopoMap terrain tiles
- **Coastal Boundaries**: UK Ordnance Survey data

## 🗺️ Regional Coverage

The visualization includes detailed analysis for:

- **Thames Estuary** - London and surrounding areas (550K population)
- **Norfolk Broads** - Low-lying agricultural region (25K population)
- **Somerset Levels** - Historic flooding area (50K population)  
- **Humber Estuary** - Hull and industrial areas (280K population)

## 🎮 Usage

### Controls
- **Year Slider**: Navigate between 1993-2050
- **Scenario Selection**: Choose climate projection scenarios
- **Play Button**: Animate through time automatically
- **Visualization Toggles**: 
  - Show/hide flood zones
  - Show/hide submerged areas
  - Show/hide coastline changes

### Map Features
- **Zoom**: 5-12 levels optimized for UK viewing
- **Popup Information**: Click areas for detailed statistics
- **Color Coding**: Risk levels from green (safe) to red (extreme)

## 🏗️ Project Structure

```
uk-climate-visualizer/
├── server.js                 # Node.js HTTP server
├── uk-climate-visualizer.html # Main visualization interface
├── sea_level_global.csv      # Historical sea level data
├── package.json              # Project configuration
└── README.md                 # This file
```

## 🔧 Technical Details

### Server
- **Port**: 3045
- **Framework**: Pure Node.js HTTP server
- **MIME Types**: Supports HTML, CSS, JS, JSON, images
- **CORS**: Enabled for cross-origin requests

### Frontend
- **Mapping**: Leaflet.js with terrain tiles
- **Styling**: Custom CSS with Met Office color scheme
- **Animation**: Smooth CSS transitions and JavaScript intervals
- **Responsive**: Grid layout adapting to different screen sizes

### Data Processing
- **Real-time Calculations**: Sea level rise impact analysis
- **Polygon Rendering**: Dynamic flood zone visualization
- **Population Modeling**: Risk assessment for affected areas

## 🌍 Climate Scenarios

### Historical (1993-2020)
- Based on actual Met Office measurements
- Satellite altimetry data
- Tide gauge records

### Moderate Scenario (RCP4.5)
- Assumes moderate emission reductions
- 2°C global warming by 2100
- Sea level rise: 30-60cm by 2100

### Severe Scenario (RCP8.5)
- Business-as-usual emissions
- 4°C+ global warming by 2100
- Sea level rise: 60-110cm by 2100

## 🚨 Vulnerable Areas Analysis

The tool identifies areas at risk based on:
- **Elevation**: Digital terrain models
- **Population Density**: Census data integration
- **Infrastructure**: Critical facilities mapping
- **Historical Events**: Past flooding records

## 📈 Future Enhancements

- [ ] Real-time weather integration
- [ ] Storm surge modeling
- [ ] Economic impact calculations
- [ ] Export functionality (PDF/PNG)
- [ ] Mobile app version
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Met Office for climate data
- OpenStreetMap contributors
- Leaflet.js mapping library
- IPCC for climate scenario frameworks
- UK Environment Agency for flood risk data

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Contact: [Your contact information]

---

**⚠️ Disclaimer**: This visualization is for educational and research purposes. For official climate projections and flood risk assessments, consult authorized meteorological and environmental agencies.
