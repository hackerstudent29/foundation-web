(function() { try { var theme = localStorage.getItem('theme'); if (theme !== 'dark') { document.documentElement.classList.add('light-theme'); } } catch (e) {} })();
