function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
    const toggle = document.querySelector('.theme-toggle');
    toggle.innerHTML = theme === 'dark' ? '🌙' : '🌞';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(defaultTheme);

    // Button click handler
    document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        // Only trigger if just 'D' is pressed (no modifier keys)
        if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.metaKey && !e.altKey && 
            // Don't trigger if user is typing in an input or textarea
            !['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) {
            toggleTheme();
        }
    });
}

document.addEventListener('DOMContentLoaded', initTheme); 