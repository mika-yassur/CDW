// d3-events-foundation.js
// This script creates a D3.js timeline with major hurricanes hitting the US in the last 10 years

(function() {
  // Set up the SVG container
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Create SVG element
  const svg = d3.select('#d3-container-1')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // Major hurricanes hitting the US in the last 12 events
  const events = [
  { date: new Date(-600, 0, 1), name: 'Presocratic (Ancient Greek)', category: 'philosophy', location: 'Ancient Greece', duration: 200, endYear: -400 },
  { date: new Date(-469, 0, 1), name: 'Classical Greek (Socrates–Aristotle)', category: 'philosophy', location: 'Ancient Greece', duration: 147, endYear: -322 },
  { date: new Date(-322, 0, 1), name: 'Hellenistic/Roman', category: 'philosophy', location: 'Greece/Rome', duration: 851, endYear: 529 },
  { date: new Date(400, 0, 1), name: 'Medieval (Western)', category: 'philosophy', location: 'Western Europe', duration: 1100, endYear: 1500 },
  { date: new Date(1350, 0, 1), name: 'Renaissance', category: 'philosophy', location: 'Italy/Western Europe', duration: 250, endYear: 1600 },
  { date: new Date(1600, 0, 1), name: 'Early Modern (Empiricism/Rationalism)', category: 'philosophy', location: 'Western Europe', duration: 200, endYear: 1800 },
  { date: new Date(1650, 0, 1), name: 'Enlightenment', category: 'philosophy', location: 'Western Europe', duration: 150, endYear: 1800 },
  { date: new Date(1800, 0, 1), name: '19th‑Century (German idealism, pragmatism, positivism)', category: 'philosophy', location: 'Europe/America', duration: 100, endYear: 1900 },
  { date: new Date(1900, 0, 1), name: '20th‑Century (analytic, continental, existentialism, postmodernism)', category: 'philosophy', location: 'Global (West focus)', duration: 100, endYear: 2000 },
  { date: new Date(800, 0, 1), name: 'Arabic–Persian Classical (Islamic Golden Age)', category: 'philosophy', location: 'Middle East', duration: 400, endYear: 1200 },
  { date: new Date(1200, 0, 1), name: 'Arabic–Persian Post‑Classical', category: 'philosophy', location: 'Middle East', duration: 400, endYear: 1600 },
  { date: new Date(-900, 0, 1), name: 'Indian Ancient (Vedic, Upanishadic, Buddhism, Jainism)', category: 'philosophy', location: 'Indian subcontinent', duration: 700, endYear: -200 },
  { date: new Date(-200, 0, 1), name: 'Indian Classical & Medieval (Darsanas, Vedanta)', category: 'philosophy', location: 'Indian subcontinent', duration: 2000, endYear: 1800 },
  { date: new Date(1800, 0, 1), name: 'Indian Modern', category: 'philosophy', location: 'Indian subcontinent', duration: 225, endYear: 2025 },
  { date: new Date(-500, 0, 1), name: 'Chinese Early (pre‑Qin)', category: 'philosophy', location: 'China', duration: 721, endYear: 221 },
  { date: new Date(221, 0, 1), name: 'Chinese Han‑Song', category: 'philosophy', location: 'China', duration: 739, endYear: 960 },
  { date: new Date(960, 0, 1), name: 'Neo‑Confucian (Song–Qing)', category: 'philosophy', location: 'China', duration: 840, endYear: 1800 },
  { date: new Date(1800, 0, 1), name: 'Chinese Modern (Western encounter, Marxism)', category: 'philosophy', location: 'China', duration: 225, endYear: 2025 }
];


  // Create time scale
  const timeScale = d3.scaleTime()
    .domain(d3.extent(events, d => d.date))
    .range([0, width]);

  // Create y scale for event positioning
  const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height - 50, 50]);

  // Create color scale for hurricane categories
  const colorScale = d3.scaleOrdinal()
    .domain(['major', 'catastrophic'])
    .range(['#ff6b6b', '#8b0000']);

  // Create x-axis (time axis)
  const xAxis = d3.axisBottom(timeScale)
    .tickFormat(d3.timeFormat('%b %Y'))
    .tickSize(-height + 100);

  // Add x-axis to SVG
  svg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${height - 50})`)
    .call(xAxis)
    .selectAll('line')
    .attr('stroke', '#e0e0e0')
    .attr('stroke-dasharray', '2,2');

  // Style the axis
  svg.select('.x-axis')
    .selectAll('text')
    .style('font-size', '12px')
    .style('fill', '#666');

  // Add axis title
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', height - 10)
    .attr('text-anchor', 'middle')
    .style('font-size', '14px')
    .style('fill', '#333')
    .text('Major Hurricanes (2018-2024)');

  // Add events as circles with size based on damage
  const eventCircles = svg.selectAll('.event-circle')
    .data(events)
    .enter()
    .append('circle')
    .attr('class', 'event-circle')
    .attr('cx', d => timeScale(d.date))
    .attr('cy', (d, i) => height - 100 - (i * 25)) // Y increases over time (earlier events at bottom)
    .attr('r', d => {
      // Size based on damage amount
      const damage = parseFloat(d.damage.replace(/[^0-9.]/g, ''));
      if (damage > 50) return 12; // Catastrophic
      if (damage > 10) return 10; // Major
      return 8; // Minor
    })
    .attr('fill', d => colorScale(d.category))
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)
    .style('cursor', 'pointer')
    .style('opacity', 0.8)
    .on('mouseover', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('r', d => {
          const damage = parseFloat(d.damage.replace(/[^0-9.]/g, ''));
          if (damage > 50) return 16;
          if (damage > 10) return 14;
          return 12;
        })
        .style('opacity', 1);
      
      // Show tooltip
      showTooltip(event, d);
    })
    .on('mouseout', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('r', d => {
          const damage = parseFloat(d.damage.replace(/[^0-9.]/g, ''));
          if (damage > 50) return 12;
          if (damage > 10) return 10;
          return 8;
        })
        .style('opacity', 0.8);
      
      // Hide tooltip
      hideTooltip();
    })
    .on('click', function(event, d) {
      console.log('Hurricane clicked:', d);
      // Add click functionality here
    });

  // Add event labels
  svg.selectAll('.event-label')
    .data(events)
    .enter()
    .append('text')
    .attr('class', 'event-label')
    .attr('x', d => timeScale(d.date))
    .attr('y', (d, i) => height - 100 - (i * 25) - 15) // Labels above each event
    .attr('text-anchor', 'middle')
    .style('font-size', '10px')
    .style('fill', '#333')
    .style('pointer-events', 'none')
    .text(d => d.name);

  // Create tooltip
  const tooltip = d3.select('#d3-container-1')
    .append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('background', 'rgba(0, 0, 0, 0.9)')
    .style('color', 'white')
    .style('padding', '10px 15px')
    .style('border-radius', '6px')
    .style('font-size', '12px')
    .style('pointer-events', 'none')
    .style('opacity', 0)
    .style('transition', 'opacity 0.2s')
    .style('max-width', '200px');

  function showTooltip(event, d) {
    tooltip.transition()
      .duration(200)
      .style('opacity', 1);
    
    tooltip.html(`
      <strong>${d.name}</strong><br>
      Date: ${d3.timeFormat('%B %d, %Y')(d.date)}<br>
      Location: ${d.location}<br>
      Category: ${d.category}<br>
      Fatalities: ${d.fatalities}<br>
      Damage: ${d.damage}
    `)
    .style('left', (event.pageX + 10) + 'px')
    .style('top', (event.pageY - 10) + 'px');
  }

  function hideTooltip() {
    tooltip.transition()
      .duration(200)
      .style('opacity', 0);
  }

  // Add legend
  const legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', `translate(20, 20)`);

  const legendItems = legend.selectAll('.legend-item')
    .data(['major', 'catastrophic'])
    .enter()
    .append('g')
    .attr('class', 'legend-item')
    .attr('transform', (d, i) => `translate(0, ${i * 20})`);

  legendItems.append('circle')
    .attr('r', 6)
    .attr('fill', d => colorScale(d))
    .attr('stroke', '#fff')
    .attr('stroke-width', 1);

  legendItems.append('text')
    .attr('x', 15)
    .attr('y', 4)
    .style('font-size', '12px')
    .style('fill', '#333')
    .text(d => d.charAt(0).toUpperCase() + d.slice(1));

  // Add subtitle about climate change
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', -10)
    .attr('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('fill', '#666')
    .style('font-style', 'italic')
    .text('Increasing frequency and intensity linked to climate change');

  console.log('D3.js hurricane timeline loaded successfully!');
})(); 