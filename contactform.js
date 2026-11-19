const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.classList.remove('error');

    // Simple validation: highlight any invalid field
    let valid = true;
    form.querySelectorAll('input, textarea').forEach((field) => {
        const ok = field.checkValidity() && field.value.trim() !== '';
        field.classList.toggle('invalid', !ok);
        if (!ok) valid = false;
    });

    if (!valid) {
        status.classList.add('error');
        status.textContent = 'Please fill in every field with valid details.';
        return;
    }

    // Demo only – replace with fetch() to your backend / Formspree / EmailJS
    status.textContent = 'Thanks for reaching out. This demo form does not send messages yet.';
    form.reset();
});

// Clear the red underline as the user types
form.addEventListener('input', (e) => e.target.classList.remove('invalid'));
