 // creating nodes for relational networks based on my final project 
  const nodes = [
            { id: "Samia Henni", x: 300, y: 100 },
            { id: "reformulations of language", x: 800, y: 180 },
            { id: "land", x: 280, y: 280 },
            { id: "systems of power", x: 580, y: 240 },
            { id: "cartographies", x: 350, y: 340 },
            { id: "memory", x: 750, y: 340 },
            { id: "palimpsest", x: 580, y: 400 },
            { id: "Archives", x: 800, y: 400 },
            { id: "terroir", x: 200, y: 430 },
            { id: "stories of place", x: 400, y: 500 },
            { id: "Forensic Architecture", x: 500, y: 520 },
            { id: "history", x: 750, y: 570 },
            { id: "contamination", x: 100, y: 620 },
            { id: "testimony", x: 650, y: 630 },
            { id: "aesthetics", x: 420, y: 760 },
            { id: "photography", x: 650, y: 750 },
            { id: "Laura Kurgan", x: 300, y: 880 },
            { id: "pixels", x: 800, y: 900 },
            { id: "grain", x: 900, y: 800 },
            { id: "Adriana Gallo", x: 700, y: 680 },
            { id: "toxicity", x: 100, y: 800 },
            { id: "earth berms", x: 500, y: 900 },
            { id: "bulldozer", x: 600, y: 1000 },
            { id: "ruination", x: 400, y: 1100 },
            { id: "moving through walls", x: 200, y: 1200 },
            { id: "Laura Ann Stoler", x: 800, y: 1200 },
            { id: "Saba Innab", x: 300, y: 1300 },
            { id: "Emily Jacir", x: 600, y: 1400 },
            { id: "rebuilding", x: 500, y: 1500 },
            { id: "Hagar Kotef", x: 700, y: 1600 },
            { id: "Leopold Lambert", x: 400, y: 1700 },
            { id: "Ariella Azoulay", x: 800, y: 1800 },
            { id: "Gordon Matta Clark", x: 300, y: 1900 },
            { id: "gaps", x: 600, y: 2000 },
            { id: "soil", x: 500, y: 2100 },
            { id: "atmosphere", x: 900, y: 2200 },
            { id: "home", x: 200, y: 2300 },

            { id: "rehearsal", x: 1000, y: 2400 },
            { id: "performance", x: 1100, y: 2500 },
            { id: "repetition", x: 1200, y: 2600 },
            { id: "exhibition", x: 1300, y: 2700 },
            { id: "embodiment", x: 1400, y: 2800 }

        ];
// creating edges
        const allLinks = [
            { source: "systems of power", target: "reformulations of language" },
            { source: "systems of power", target: "cartographies" },
            { source: "systems of power", target: "Archives" },
            { source: "memory", target: "Archives" },
            { source: "palimpsest", target: "Archives" },
            { source: "palimpsest", target: "stories of place" },
            { source: "palimpsest", target: "history" },
            { source: "Archives", target: "Sally Rooney" },
            { source: "Archives", target: "history" },
            { source: "land", target: "cartographies" },
            { source: "cartographies", target: "stories of place" },
            { source: "terroir", target: "stories of place" },
            { source: "stories of place", target: "Forensic Architecture" },
            { source: "Forensic Architecture", target: "cartographies" },
            { source: "stories of place", target: "land" },
            { source: "Walter Benjamin", target: "history"},
            { source: "Walter Benjamin", target: "Archives"},
            { source: "Walter Benjamin", target: "photography"},
            { source: "testimony", target: "Forensic Architecture" },
            { source: "photography", target: "ways of seeing" },
            { source: "ways of seeing", target: "cartographies" },
            { source: "ways of seeing", target: "Laura Kurgan" },
            { source: "ways of seeing", target: "James Scott" },
            { source: "aesthetics", target: "photography" },
            { source: "history", target: "Forensic Architecture" },
            { source: "history", target: "memory" },
            { source: "grain", target: "Archives" },
            { source: "grain", target: "pixels" },
            { source: "pixels", target: "photography" },
            { source: "pixels", target: "Laura Kurgan" },
            { source: "pixels", target: "ways of seeing" },
            { source: "grain", target: "Adriana Gallo" },
            { source: "grain", target: "land" },
            { source: "Adriana Gallo", target: "terroir" },
            { source: "Gordon Matta Clark", target: "James Scott" },
            { source: "earth berms", target: "bulldozer" },
            { source: "bulldozer", target: "ruination" },
            { source: "rebuilding", target: "Saba Innab" }, 

            { source: "Leopold Lambert", target: "bulldozer" },
            { source: "Gordon Matta Clark", target: "ruination" },
            { source: "moving through walls", target: "Forensic Architecture" },
            { source: "Ariella Azoulay", target: "history" },
            { source: "toxicity", target: "Samia Henni" },
            { source: "Samia Henni", target: "history" },
            { source: "Hagar Kotef", target: "ruination" },
            { source: "gaps", target: "Emily Jacir" },
            { source: "contamination", target: "Samia Henni" },

            { source: "Samia Henni", target: "Archives" },
            { source: "Emily Jacir", target: "Archives" },
            { source: "Laura Ann Stoler", target: "Archives" },
            { source: "Laura Ann Stoler", target: "grain" },

            { source: "Ariella Azoulay", target: "Archive" },
            { source: "soil", target: "toxicity" },
            { source: "atmosphere", target: "toxicity" },
            { source: "home", target: "land"},

            { source: "Samia Henni", target: "rehearsal" },
            { source: "Samia Henni", target: "performance" },
            { source: "rehearsal", target: "repetition" },
            { source: "performance", target: "embodiment" },
            { source: "embodiment", target: "aesthetics" },
            { source: "aesthetics", target: "Forensic Architecture"},
            { source: "earth berms", target: "repetition" },
            { source: "ruination", target: "moving through walls" },
            { source: "rebuilding", target: "repetition" },
        ];

        // Create a set of existing node IDs for quick lookup
        const nodeIds = new Set(nodes.map(node => node.id));

        // Filter links to only include those where both source and target nodes exist
        const links = allLinks.filter(link => {
            const sourceExists = nodeIds.has(link.source);
            const targetExists = nodeIds.has(link.target);
            
            if (!sourceExists) {
                console.warn(`Link source node "${link.source}" does not exist in nodes array`);
            }
            if (!targetExists) {
                console.warn(`Link target node "${link.target}" does not exist in nodes array`);
            }
            
            return sourceExists && targetExists;
        });

        console.log(`Filtered ${allLinks.length - links.length} invalid links. ${links.length} valid links remain.`);

        // Set up SVG with zoom capabilities
        const svg = d3.select("#network");
        const width = window.innerWidth;
        const height = window.innerHeight;

        svg.attr("width", width).attr("height", height);

        // Create zoom behavior
        const zoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on("zoom", handleZoom);

        // Apply zoom to SVG
        svg.call(zoom);

        // Create main group for all elements (this will be transformed)
        const mainGroup = svg.append("g").attr("class", "main-group");

        // Create groups for links and nodes within the main group
        const linkGroup = mainGroup.append("g").attr("class", "links");
        const nodeGroup = mainGroup.append("g").attr("class", "nodes");

        // Zoom handler
        function handleZoom(event) {
            const { transform } = event;
            mainGroup.attr("transform", transform);
            
            // Update zoom info display
            const zoomInfo = document.getElementById("zoom-info");
            if (zoomInfo) {
                zoomInfo.textContent = `Zoom: ${transform.k.toFixed(2)}x | Pan: (${Math.round(transform.x)}, ${Math.round(transform.y)})`;
            }
        }

        // Zoom functions
        function zoomIn() {
            svg.transition().duration(300).call(zoom.scaleBy, 1.5);
        }

        function zoomOut() {
            svg.transition().duration(300).call(zoom.scaleBy, 1 / 1.5);
        }

        function resetZoom() {
            svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
        }

        // Set up force simulation
        let simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(100))
            .force("charge", d3.forceManyBody().strength(-500))
            .force("center", d3.forceCenter(width / 2, height / 2));

        // Create links
        const link = linkGroup.selectAll(".link")
            .data(links)
            .enter().append("line")
            .attr("class", "link");

        // Create nodes
        const node = nodeGroup.selectAll(".node")
            .data(nodes)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", 8)
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        // Create labels
        const label = nodeGroup.selectAll(".node-label")
            .data(nodes)
            .enter().append("text")
            .attr("class", "node-label")
            .text(d => d.id);

        // Update positions on simulation tick
        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);

            label
                .attr("x", d => d.x)
                .attr("y", d => d.y + 25); // Position label below node
        });

        // Special hover group nodes
        const hoverGroup = ["photography", "Joan Didion", "Anne Carson", "aesthetics"];

        // Hover group functionality
        function highlightHoverGroup(highlight) {
            const hoverGroup = ["photography", "Joan Didion", "Anne Carson", "aesthetics"];
            
            // Highlight/unhighlight nodes
            node.classed("highlighted", function(d) {
                return highlight && hoverGroup.includes(d.id);
            });
            
            // Highlight/unhighlight links between hover group nodes
            link.classed("highlighted", function(d) {
                return highlight && 
                    hoverGroup.includes(d.source.id) && 
                    hoverGroup.includes(d.target.id);
            });
        }
        
        function showTooltip(event) {
            const tooltip = document.getElementById("hover-tooltip");
            tooltip.style.display = "block";
            tooltip.style.left = event.pageX + "px";
            tooltip.style.top = event.pageY + "px";
        }
        
        function hideTooltip() {
            const tooltip = document.getElementById("hover-tooltip");
            tooltip.style.display = "none";
        }

        // Drag functions
        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
            d3.select(this).classed("dragging", true);
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
            d3.select(this).classed("dragging", false);
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey || event.metaKey) {
                switch(event.key) {
                    case '=':
                    case '+':
                        event.preventDefault();
                        zoomIn();
                        break;
                    case '-':
                        event.preventDefault();
                        zoomOut();
                        break;
                    case '0':
                        event.preventDefault();
                        resetZoom();
                        break;
                }
            }
        });

        // Add some nice easing to the simulation
        simulation.alpha(1).restart();
        // After showing the project-8 panel and container resizes
