
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

const jsonUrl = 'data.json';
const info='footerData.json'

        // Función para cargar el JSON y mostrar el contenido
        async function loadGallery() {
            try {
                const response = await fetch(jsonUrl);
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo JSON');
                }
                const data = await response.json();
                
                const galleryContainer = document.getElementById('gallery-container');
                
                data.items.forEach(item => {
                    const galleryItem = document.createElement('div');
                    galleryItem.classList.add('gallery-item');
                    
                    galleryItem.innerHTML = `
                        <img src="${item.imgUrl}" alt="${item.title}">
                        <div class="text-content">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `;
                    
                    galleryContainer.appendChild(galleryItem);
                });
            } catch (error) {
                console.error('Error:', error);
            }
        }

        // Cargar la galería al cargar la página
        document.addEventListener('DOMContentLoaded', loadGallery);