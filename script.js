document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-animate');
    const viewportHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight - 50) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copy-button');
    var copyTextElement = document.getElementById('copy-text');

    if (copyTextElement) {
        var copyText = copyTextElement.textContent;

        copyButton.addEventListener('click', function() {
            var textArea = document.createElement('textarea');
            textArea.value = copyText;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                alert('Text copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
            document.body.removeChild(textArea);
        });
    } else {
        console.error('Text element not found');
    }

    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
});