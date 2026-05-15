(function () {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const items = Array.isArray(window.WORK_ITEMS) ? window.WORK_ITEMS : [];

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function itemHaystack(item) {
    return normalize([
      item.type,
      item.title,
      item.subtitle,
      item.period,
      item.status,
      item.summary,
      ...(item.stack || []),
      ...(item.metrics || []),
      ...(item.artifacts || []).map((artifact) => artifact.label)
    ].join(" "));
  }

  function activeType() {
    const pageDefault = $(".workbench-page")?.dataset.defaultType;
    const active = $(".filter-chip.is-active")?.dataset.filter;
    return active || pageDefault || "All";
  }

  function filteredItems() {
    const query = normalize($(".work-search")?.value);
    const type = activeType();
    const tableType = $("#work-grid")?.dataset.cardType;
    const effectiveType = tableType || type;

    return items.filter((item) => {
      const typeMatch = effectiveType === "All" || item.type === effectiveType;
      const queryMatch = !query || itemHaystack(item).includes(query);
      return typeMatch && queryMatch;
    });
  }

  function sortedItems(list) {
    const sortValue = $("#work-sort")?.value || "priority";
    return [...list].sort((a, b) => {
      if (sortValue === "recent") return normalize(b.period).localeCompare(normalize(a.period));
      if (sortValue === "type") return a.type.localeCompare(b.type) || a.priority - b.priority;
      if (sortValue === "status") return a.status.localeCompare(b.status) || a.priority - b.priority;
      return a.priority - b.priority;
    });
  }

  function artifactLink(artifact) {
    const disabled = !artifact.href;
    const attrs = disabled
      ? 'class="artifact-link is-disabled" aria-disabled="true"'
      : `class="artifact-link" href="${artifact.href}"`;
    return `<a ${attrs}>${artifact.label}</a>`;
  }

  function renderCard(item) {
    const stack = (item.stack || []).map((tag) => `<span>${tag}</span>`).join("");
    const artifacts = (item.artifacts || []).map(artifactLink).join("");
    const metrics = (item.metrics || []).map((metric) => `<li>${metric}</li>`).join("");

    return `
      <article class="work-card" data-type="${item.type}">
        <div class="card-topline">
          <span class="type-badge">${item.type}</span>
          <span class="status-badge">${item.status}</span>
        </div>
        <div>
          <h3>${item.title}</h3>
          <p class="card-subtitle">${item.subtitle}</p>
        </div>
        <p class="card-summary">${item.summary}</p>
        <div class="tag-row">${stack}</div>
        <ul class="metric-row">${metrics}</ul>
        <div class="artifact-row">${artifacts}</div>
      </article>
    `;
  }

  function renderGrid() {
    const grid = $("#work-grid");
    if (!grid) return;
    const list = sortedItems(filteredItems());
    grid.innerHTML = list.length
      ? list.map(renderCard).join("")
      : `<div class="empty-state">No matching work items.</div>`;
  }

  function renderTable(target) {
    const type = target.dataset.tableType;
    const rows = sortedItems(filteredItems()).filter((item) => !type || item.type === type);
    target.innerHTML = `
      <table class="work-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Status</th>
            <th>Stack</th>
            <th>Artifacts</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((item) => `
            <tr>
              <td>
                <strong>${item.title}</strong>
                <span>${item.subtitle}</span>
              </td>
              <td>${item.status}</td>
              <td>${(item.stack || []).join(", ")}</td>
              <td>${(item.artifacts || []).map((artifact) => artifact.label).join(", ")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  function renderTables() {
    $$("[data-table-type]").forEach(renderTable);
  }

  function renderCounts() {
    const stacks = new Set(items.flatMap((item) => item.stack || []));
    $$("[data-count='total']").forEach((node) => node.textContent = items.length);
    $$("[data-count='assignments']").forEach((node) => node.textContent = items.filter((item) => item.type === "Assignment").length);
    $$("[data-count='projects']").forEach((node) => node.textContent = items.filter((item) => item.type === "Project").length);
    $$("[data-count='stacks']").forEach((node) => node.textContent = stacks.size);
  }

  function renderMatrix() {
    const matrix = $("#stack-matrix");
    if (!matrix) return;
    const counts = new Map();
    items.forEach((item) => {
      (item.stack || []).forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
    });
    matrix.innerHTML = [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag, count]) => `
        <div class="matrix-pill">
          <span>${tag}</span>
          <strong>${count}</strong>
        </div>
      `).join("");
  }

  function renderAll() {
    renderCounts();
    renderGrid();
    renderTables();
    renderMatrix();
  }

  function bindControls() {
    $$(".filter-chip").forEach((button) => {
      button.addEventListener("click", () => {
        $$(".filter-chip").forEach((chip) => chip.classList.remove("is-active"));
        button.classList.add("is-active");
        renderAll();
      });
    });

    $$(".work-search").forEach((input) => input.addEventListener("input", renderAll));
    $("#work-sort")?.addEventListener("change", renderAll);
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindControls();
    renderAll();
  });
})();
