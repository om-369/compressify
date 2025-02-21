document.getElementById('compress-btn').addEventListener('click', function() {
    const file = document.getElementById('image-input').files[0];
    const compressionLevel = parseFloat(document.getElementById('compression-level').value);

    if (file) {
        // Display the original image
        const originalImage = document.getElementById('original-image');
        originalImage.src = URL.createObjectURL(file);
        originalImage.style.display = 'block';

        // Compress the image
        new Compressor(file, {
            quality: compressionLevel,
            success(result) {
                const compressedImage = document.getElementById('compressed-image');
                const downloadLink = document.getElementById('download-link');

                compressedImage.src = URL.createObjectURL(result);
                compressedImage.style.display = 'block';
                downloadLink.href = URL.createObjectURL(result);
                downloadLink.style.display = 'block';
            },
            error(err) {
                console.error(err.message);
                alert('An error occurred while compressing the image.');
            },
        });
    } else {
        alert('Please select an image first.');
    }
});
