
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('show');
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const omnicTitle = document.querySelector('.omnic-title');
    const omnicDescription = document.querySelector('.omnic-description');
    const dropdownArrow = document.querySelector('.dropdown-arrow');
  
    omnicTitle.addEventListener('click', () => {
      const isExpanded = omnicTitle.getAttribute('aria-expanded') === 'true';
      omnicDescription.style.display = isExpanded ? 'none' : 'block';
      omnicTitle.setAttribute('aria-expanded', !isExpanded);
      dropdownArrow.textContent = isExpanded ? '▼' : '▲';
    });
  });