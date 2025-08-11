// resources (replace with backend data) notetoself or whom it concerns
const resources = [
  { title: "Freelance Contract Template", category: "Templates", description: "Simple contract for small gigs.", link: "#"},
  { title: "Invoice Template", category: "Invoices", description: "Excel invoice for billing clients.", link: "#"},
  { title: "Milestone Verification Guide", category: "Guides", description: "How to prove work completion.", link: "#"},
  { title: "Basic Legal Rights", category: "Legal", description: "Know your rights as a freelancer.", link: "#"},
  { title: "Austin's 50 laws to Motion", category: "Financial", description: "Wanna get to the bag? Im your guy.", link: "#"},
  { title: "Contracted Labour", category: "Full-Time", description: "Full time 9-5 j*b unpaid", link: "#"}
];

// Renders resources here
function renderResources() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const categoryValue = document.getElementById('categoryFilter').value;

  // The search part
  const filtered = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchValue) || r.description.toLowerCase().includes(searchValue);
    const matchesCategory = categoryValue === "All" || r.category === categoryValue;
    return matchesSearch && matchesCategory;
  });

  const container = document.getElementById('resourceList');
  container.innerHTML = "";

  // If false search 
  if (filtered.length === 0) {
    container.innerHTML = `<p class="col-span-full text-gray-500">No resources found.</p>`;
    return;
  }

  filtered.forEach(r => {
    container.innerHTML += `
      <div class="bg-white rounded shadow p-4">
        <h2 class="text-lg font-bold text-teal-700">${r.title}</h2>
        <p class="text-sm text-gray-500">${r.category}</p>
        <p class="mt-2 text-gray-700">${r.description}</p>
        <a href="${r.link}" class="mt-3 inline-block text-sm bg-teal-600 text-white px-3 py-1 rounded">View</a>
      </div>
    `;
  });
}

// Run on page load
renderResources();