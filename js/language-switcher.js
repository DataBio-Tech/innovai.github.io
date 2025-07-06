// Language Switcher functionality for DataBio website
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');
    const currentLanguageSpan = document.getElementById('current-language');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Initialize current language display
    function updateLanguageDisplay() {
        const currentLang = getCurrentLanguage();
        currentLanguageSpan.textContent = currentLang.toUpperCase();
        
        // Update active state in dropdown
        languageOptions.forEach(option => {
            const lang = option.getAttribute('data-lang');
            if (lang === currentLang) {
                option.classList.add('bg-primary', 'text-white');
                option.classList.remove('hover:bg-surface');
            } else {
                option.classList.remove('bg-primary', 'text-white');
                option.classList.add('hover:bg-surface');
            }
        });
    }
    
    // Toggle dropdown visibility
    function toggleDropdown() {
        languageDropdown.classList.toggle('hidden');
    }
    
    // Close dropdown when clicking outside
    function closeDropdown(event) {
        if (!languageToggle.contains(event.target) && !languageDropdown.contains(event.target)) {
            languageDropdown.classList.add('hidden');
        }
    }
    
    // Handle language selection
    function handleLanguageSelection(event) {
        const selectedLang = event.target.getAttribute('data-lang');
        if (selectedLang && selectedLang !== getCurrentLanguage()) {
            setLanguage(selectedLang);
            updateLanguageDisplay();
            
            // Show a brief confirmation message
            showLanguageChangeConfirmation(selectedLang);
        }
        toggleDropdown();
    }
    
    // Show language change confirmation
    function showLanguageChangeConfirmation(language) {
        const messages = {
            'es': 'Idioma cambiado a Español',
            'en': 'Language changed to English'
        };
        
        // Create and show notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.textContent = messages[language] || messages['es'];
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 2500);
    }
    
    // Event listeners
    if (languageToggle) {
        languageToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleDropdown();
        });
    }
    
    languageOptions.forEach(option => {
        option.addEventListener('click', handleLanguageSelection);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', closeDropdown);
    
    // Close dropdown on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            languageDropdown.classList.add('hidden');
        }
    });
    
    // Initialize display
    updateLanguageDisplay();
    
    // Handle keyboard navigation in dropdown
    languageToggle.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleDropdown();
        }
    });
    
    languageOptions.forEach((option, index) => {
        option.addEventListener('keydown', function(event) {
            switch(event.key) {
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    handleLanguageSelection(event);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    const nextOption = languageOptions[index + 1] || languageOptions[0];
                    nextOption.focus();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    const prevOption = languageOptions[index - 1] || languageOptions[languageOptions.length - 1];
                    prevOption.focus();
                    break;
                case 'Escape':
                    languageDropdown.classList.add('hidden');
                    languageToggle.focus();
                    break;
            }
        });
    });
});