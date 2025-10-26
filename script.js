// Dummy blood stock data
const bloodStock = {
  "A+": { current: 45, target: 50 },
  "A-": { current: 12, target: 25 },
  "B+": { current: 38, target: 40 },
  "B-": { current: 8, target: 20 },
  "AB+": { current: 15, target: 20 },
  "AB-": { current: 5, target: 15 },
  "O+": { current: 62, target: 60 },
  "O-": { current: 18, target: 30 },
};

// Populate stock dynamically
function loadStock() {
  const stockDiv = document.getElementById("stock-list");
  if (!stockDiv) return;

  stockDiv.innerHTML = "";
  Object.entries(bloodStock).forEach(([type, data]) => {
    const percent = Math.round((data.current / data.target) * 100);
    let status = "good";
    if (percent < 50) status = "critical";
    else if (percent < 70) status = "low";
    else if (percent >= 100) status = "excellent";

    stockDiv.innerHTML += `
      <div class="card">
        <h2>${type} - ${data.current}/${data.target} units</h2>
        <span class="status ${status}">${status.toUpperCase()}</span>
        <div style="background:#eee; border-radius:10px; overflow:hidden; margin-top:10px;">
          <div style="width:${percent}%; height:10px; background:#e63946;"></div>
        </div>
      </div>
    `;
  });
}
document.addEventListener("DOMContentLoaded", loadStock);
