async function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const output = document.getElementById('output');

    if (!videoUrl) {
        output.innerHTML = '<p style="color: red;">Please enter a video URL.</p>';
        return;
    }

    try {
        // Example: Replace with an actual API endpoint or service
        const response = await fetch(`https://api.example.com/download?url=${encodeURIComponent(videoUrl)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch the video.');
        }

        const data = await response.json();
        if (data.downloadUrl) {
            output.innerHTML = `<p>Click the link below to download your video:</p>
                                <a href="${data.downloadUrl}" target="_blank" download>Download Video</a>`;
        } else {
            output.innerHTML = '<p style="color: red;">Unable to fetch the video. Please check the URL or try again later.</p>';
        }
    } catch (error) {
        console.error(error);
        output.innerHTML = '<p style="color: red;">An error occurred while processing your request.</p>';
    }
}