const applyTheme = () => {
    const root = document.documentElement;
    Object.entries(theme.cssVars).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });
};

applyTheme();
