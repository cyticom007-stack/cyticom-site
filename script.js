document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('leadForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const leads = JSON.parse(localStorage.getItem('cyticom_leads') || '[]');
  leads.push({ ...data, at: new Date().toISOString() });
  localStorage.setItem('cyticom_leads', JSON.stringify(leads));
  msg.textContent = 'Thanks — your request is saved. Next: connect this form to Google Sheets / email webhook.';
  form.reset();
});
