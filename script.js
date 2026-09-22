const planButtons = document.querySelectorAll('.select-plan');
const selectedPlanEl = document.getElementById('selected-plan');
const selectedPriceEl = document.getElementById('selected-price');
const amountInput = document.getElementById('amount');
const paymentForm = document.getElementById('payment-form');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

let selectedPlan = 'Pro';
let selectedPrice = 28500;

planButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedPlan = button.dataset.plan;
    selectedPrice = Number(button.dataset.price);

    selectedPlanEl.textContent = selectedPlan;
    selectedPriceEl.textContent = `$${selectedPrice.toLocaleString('es-AR')}`;
    amountInput.value = selectedPrice;

    planButtons.forEach((btn) => {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-secondary');
    });

    button.classList.remove('btn-secondary');
    button.classList.add('btn-primary');
  });
});

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const paymentMethod = document.getElementById('payment-method').value;
  const amount = Number(amountInput.value);

  if (!name || !email || amount < 100) {
    alert('Por favor completa todos los campos con datos válidos.');
    return;
  }

  toast.textContent = 'Pago simulado realizado con éxito.';
  toast.classList.add('visible');

  setTimeout(() => toast.classList.remove('visible'), 2200);

  console.log('Pago simulado:', {
    cliente: name,
    email,
    plan: selectedPlan,
    metodo: paymentMethod,
    monto: amount,
  });

  paymentForm.reset();
  selectedPlanEl.textContent = selectedPlan;
  selectedPriceEl.textContent = `$${selectedPrice.toLocaleString('es-AR')}`;
  amountInput.value = selectedPrice;
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  toast.textContent = 'Mensaje enviado correctamente.';
  toast.classList.add('visible');

  setTimeout(() => toast.classList.remove('visible'), 2200);
  contactForm.reset();
});

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach((faq) => faq.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});
