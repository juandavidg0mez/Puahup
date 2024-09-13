const footer='footerData.json'
async function loadGallery() {
    try {
        const response = await fetch(footer);
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const info = await response.json();
        
        const galleryContainer = document.getElementById('information-gallery');
        
        info.data.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('info-container');
            galleryItem.innerHTML = `
                <div class="info-item ">
                    <h3>${item.title}</h3>
                    <hr>
                    <h3>${item.description}</h3>
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

