const fs = require('fs');
const path = require('path');

const imagenesDir = path.join(__dirname, 'imagenes');
const galeriaFile = path.join(__dirname, 'galeria.html');

// Function to get image files
function getImageFiles(dir) {
    try {
        const files = fs.readdirSync(dir);
        return files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(ext) && file !== 'logo.svg';
        });
    } catch (err) {
        console.error('Error reading directory:', err);
        return [];
    }
}

// Function to generate gallery HTML
function generateGalleryHTML(images) {
    let html = '<section class="galeria-grid">\n';
    images.forEach(image => {
        const name = path.parse(image).name.replace(/_/g, ' '); // Replace underscores with spaces
        html += `    <div class="card">
        <img src="imagenes/${image}" alt="${name}">
        <p>${name}</p>
    </div>\n`;
    });
    html += '</section>\n';
    return html;
}

// Function to update galeria.html
function updateGaleriaHTML(galleryHTML) {
    try {
        let content = fs.readFileSync(galeriaFile, 'utf8');
        // Find the section to replace
        const startMarker = '<section class="galeria-grid">';
        const endMarker = '</section>';
        const startIndex = content.indexOf(startMarker);
        const endIndex = content.indexOf(endMarker, startIndex) + endMarker.length;
        if (startIndex === -1 || endIndex === -1) {
            console.error('Could not find gallery section in galeria.html');
            return;
        }
        const before = content.substring(0, startIndex);
        const after = content.substring(endIndex);
        const newContent = before + galleryHTML + after;
        fs.writeFileSync(galeriaFile, newContent, 'utf8');
        console.log('Gallery updated successfully!');
    } catch (err) {
        console.error('Error updating galeria.html:', err);
    }
}

// Main function
function main() {
    const images = getImageFiles(imagenesDir);
    const galleryHTML = generateGalleryHTML(images);
    updateGaleriaHTML(galleryHTML);
}

main();