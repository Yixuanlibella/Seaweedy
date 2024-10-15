document.addEventListener('DOMContentLoaded', () => {
    const preface = document.getElementById('preface-container');
    const mainContent = document.getElementById('main-content');

    // Show main content after 5 seconds
    setTimeout(() => {
        preface.style.display = 'none';
        mainContent.style.display = 'block';
    }, 5000);

    // Button event listener
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked:', button.getAttribute('data-page'));
        });
    });
});
