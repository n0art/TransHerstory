// script.js

const width = window.innerWidth - 320;
const height = window.innerHeight;

const svg = d3.select("#graph")
  .attr("width", width)
  .attr("height", height);
const container = svg.append("g");

// ZOOM + PAN

const zoom = d3.zoom()
  .scaleExtent([0.2, 4])
  .on("zoom", (event) => {

    container.attr(
      "transform",
      event.transform
    );

  });

svg.call(zoom);
// CREATE LINKS AUTOMATICALLY THROUGH TAGS

const links = [];


// TIME + PLACE FILTERS

const allTimes =
  [...new Set(notes.flatMap(n => n.timePeriods))];

const allPlaces =
  [...new Set(notes.map(n => n.place))];

const timeList =
  document.getElementById("timeList");

const placeList =
  document.getElementById("placeList");

let activeTime = null;
let activePlace = null;


// CREATE TIME BUTTONS

allTimes.forEach(time => {

  const button = document.createElement("button");

  button.className = "metaButton";
  button.innerText = time;

  button.onclick = () => {

    if (activeTime === time) {
      activeTime = null;
      button.classList.remove("active");
    } else {
      activeTime = time;

      document
        .querySelectorAll("#timeList .metaButton")
        .forEach(b => b.classList.remove("active"));

      button.classList.add("active");
    }

    updateFilters();
  };

  timeList.appendChild(button);
});


// CREATE PLACE BUTTONS

allPlaces.forEach(place => {

  const button = document.createElement("button");

  button.className = "metaButton";
  button.innerText = place;

  button.onclick = () => {

    if (activePlace === place) {
      activePlace = null;
      button.classList.remove("active");
    } else {

      activePlace = place;

      document
        .querySelectorAll("#placeList .metaButton")
        .forEach(b => b.classList.remove("active"));

      button.classList.add("active");
    }

    updateFilters();
  };

  placeList.appendChild(button);
});

// CREATE TAG FILTER BUTTONS

const allTags = [...new Set(notes.flatMap(note => note.tags))];

const tagList = document.getElementById("tagList");

let activeTag = null;

allTags.forEach(tag => {

  const button = document.createElement("div");

  button.className = "filter-tag";
  button.innerText = tag;

  button.addEventListener("click", () => {

    // toggle active state

    if (activeTag === tag) {
      activeTag = null;

      document.querySelectorAll(".filter-tag")
        .forEach(el => el.classList.remove("active"));

      node.attr("opacity", 1);
      labels.attr("opacity", 1);

      return;
    }

    activeTag = tag;

    document.querySelectorAll(".filter-tag")
      .forEach(el => el.classList.remove("active"));

    button.classList.add("active");

    node.attr("opacity", d =>
      d.tags.includes(tag) ? 1 : 0.1
    );

    labels.attr("opacity", d =>
      d.tags.includes(tag) ? 1 : 0.1
    );

  });

  tagList.appendChild(button);

});

// DROPDOWN TOGGLE

const tagToggle =
  document.getElementById("tagToggle");

tagToggle.addEventListener("click", () => {

  document
    .getElementById("tagList")
    .classList.toggle("hidden");

});
notes.forEach(note => {

  note.connections.forEach(targetId => {

    const targetExists = notes.find(
      n => n.id === targetId
    );

    if (targetExists) {

      links.push({

        source: note.id,
        target: targetId,

        strength: 1

      });

    }

  });

});
const simulation = d3.forceSimulation(notes)

  .force(
    "link",
    d3.forceLink(links)
      .id(d => d.id)
      .distance(80)
  )

  .force(
    "charge",
    d3.forceManyBody().strength(-140)
  )

  .force(
    "collision",
    d3.forceCollide(25)
  )

  .force(
    "center",
    d3.forceCenter(width / 2, height / 2)
  );
// DRAW LINKS

const link = container
  .append("g")
  .selectAll("line")
  .data(links)
  .enter()
  .append("line")
.attr("class", "link")
.attr("stroke-width", d => d.strength * 1.5)
.attr("opacity", d => 0.3 + d.strength * 0.2);


// DRAW NODES

notes.forEach(note => {

  note.x =
    width / 2 + (Math.random() - 0.5) * 300;

  note.y =
    height / 2 + (Math.random() - 0.5) * 300;

});

link.append("title")
  .text(d =>
    `${d.source.id} → ${d.target.id}`
  );
const node = container
  .append("g")
  .selectAll("circle")
  .data(notes)
  .enter()
  .append("circle")
.attr("r", d =>
4 + d.tags.length * 1.2
)
  .attr("class", d => `node node-${d.id}`)
  .attr("fill", "#9369c3")
  .call(drag(simulation));


// TITLES

const labels = container
  .append("g")
  .selectAll("text")
  .data(notes)
  .enter()
  .append("text")
  .text(d => d.title)
  .attr("fill", "#888")
  .attr("font-size", "12px")
  .attr("dx", 12)
  .attr("dy", 4);


// SIDEBAR INTERACTION

node.on("click", (event, d) => {

  document.getElementById("note-title").innerText = d.title;

  document.getElementById("note-content").innerText =
    d.content;

  document.getElementById("note-tags").innerHTML =
    d.tags.map(tag =>
      `<span class="tag">${tag}</span>`
    ).join("");
});


// ANIMATION LOOP

simulation.on("tick", () => {

  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  labels
    .attr("x", d => d.x)
    .attr("y", d => d.y);

});


// DRAGGING

function drag(simulation) {

  function dragstarted(event, d) {
    if (!event.active)
      simulation.alphaTarget(0.3).restart();

    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active)
      simulation.alphaTarget(0);

    d.fx = null;
    d.fy = null;
  }

  return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}

function updateFilters() {

  node.attr("opacity", d => {

    const timeMatch =
      !activeTime ||
d.timePeriods.includes(activeTime);

    const placeMatch =
      !activePlace || d.place === activePlace;

    return timeMatch && placeMatch ? 1 : 0.08;
  });

  labels.attr("opacity", d => {

    const timeMatch =
   !activeTime ||
d.timePeriods.includes(activeTime);

    const placeMatch =
      !activePlace || d.place === activePlace;

    return timeMatch && placeMatch ? 1 : 0.08;
  });

}
// SEARCH

document.getElementById("search")
.addEventListener("input", e => {

  const value = e.target.value.toLowerCase();

  node.attr("opacity", d =>
    d.title.toLowerCase().includes(value) ? 1 : 0.15
  );

  labels.attr("opacity", d =>
    d.title.toLowerCase().includes(value) ? 1 : 0.15
  );
});


