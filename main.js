function toggleBox(box) {
    box.classList.toggle('expanded');
    if (!box.querySelector('.options')) {
        let options = document.createElement('div');
        options.classList.add('options');
        
        let colorContainer = document.createElement('div');
        colorContainer.classList.add('color-container');
        let colors = ['red', 'blue', 'green', 'yellow'];
        colors.forEach(color => {
            let btn = document.createElement('button');
            btn.classList.add('color-option', `color-${color}`);
            btn.onclick = (e) => {
                e.stopPropagation();
                box.style.backgroundColor = color;
            };
            colorContainer.appendChild(btn);
        });
        
        let sizeContainer = document.createElement('div');
        sizeContainer.classList.add('size-container');
        let sizes = [
            { label: 'Small', size: '150px' },
            { label: 'Medium', size: '200px' },
            { label: 'Large', size: '250px' }
        ];
        sizes.forEach(size => {
            let btn = document.createElement('button');
            btn.classList.add('size-option');
            btn.textContent = size.label;
            btn.onclick = (e) => {
                e.stopPropagation();
                box.style.width = size.size;
                box.style.height = parseInt(size.size) * 0.6 + 'px';
            };
            sizeContainer.appendChild(btn);
        });
        
        options.appendChild(colorContainer);
        options.appendChild(sizeContainer);
        box.appendChild(options);
    }
}
