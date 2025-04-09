// Можно добавить интерактивность при необходимости
document.addEventListener('DOMContentLoaded', function() {
    // Пример: добавление класса при наведении на пункты меню
    const menuItems = document.querySelectorAll('.menu-block-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#fff';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.color = '#8B8B8B';
        });

        item.addEventListener('click', function() {
            this.style.color = '#e1ec9d';  
        });
    });
});
