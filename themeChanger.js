const themeColors = document.querySelectorAll('[name = "theme"]');

const storeThemes = function(theme) {
    localStorage.setItem('theme', theme);
}

const applyTheme = function() {
    const activeTheme = localStorage.getItem('theme');
    themeColors.forEach((themeOption) => {
        if (activeTheme === themeOption.id) {
            themeOption.ckecked = true;
        }
    })
}

themeColors.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeThemes(themeOption.id);
    })
})

document.onload = applyTheme();