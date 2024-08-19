document.getElementById('start-camera').addEventListener('click', function() {
    const video = document.getElementById('camera-stream');
    const qrResult = document.getElementById('qr-result');
    const qrContent = document.getElementById('qr-content');
    const canvas = document.getElementById('qr-canvas');
    const context = canvas.getContext('2d');
    
    // GitHub API details
    const repoOwner = 'YOUR_GITHUB_USERNAME';
    const repoName = 'YOUR_REPOSITORY_NAME';
    const filePath = 'data.js';
    const token = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN';

    video.style.display = 'block';

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            scanQRCode();
        })
        .catch(function(err) {
            console.error("Error accessing the camera: ", err);
            alert("Could not access the camera. Please make sure your device has a camera and that you have granted permission.");
        });

    function scanQRCode() {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

            if (qrCode) {
                const scannedData = qrCode.data;
                fetchDataFromGitHub(scannedData);
            }
        }
        requestAnimationFrame(scanQRCode);
    }

    function fetchDataFromGitHub(scannedData) {
        fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
            headers: {
                'Authorization': `token ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const content = atob(data.content); // Decode base64 content
            const jsonData = eval(content); // Parse JSON content
            
            const item = jsonData.find(item => Object.keys(item)[0] === scannedData);
            if (item) {
                const status = item[scannedData];
                if (status === 'unscanned') {
                    updateDataOnGitHub(scannedData, 'scanned');
                } else {
                    alert('This QR code has already been scanned.');
                }
            } else {
                alert('QR code not found in the data.');
            }
        })
        .catch(err => {
            console.error('Error fetching data from GitHub:', err);
        });
    }

    function updateDataOnGitHub(scannedData, newStatus) {
        fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
            method: 'GET',
            headers: {
                'Authorization': `token ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const content = atob(data.content); // Decode base64 content
            const jsonData = eval(content); // Parse JSON content
            
            // Update the status
            const updatedData = jsonData.map(item => {
                if (Object.keys(item)[0] === scannedData) {
                    return { [scannedData]: newStatus };
                }
                return item;
            });

            const updatedContent = JSON.stringify(updatedData);
            const updatedContentBase64 = btoa(updatedContent);

            // Update the file on GitHub
            fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: 'Update QR code status',
                    content: updatedContentBase64,
                    sha: data.sha
                })
            })
            .then(response => response.json())
            .then(() => {
                alert('QR code status updated successfully.');
            })
            .catch(err => {
                console.error('Error updating data on GitHub:', err);
            });
        })
        .catch(err => {
            console.error('Error fetching data from GitHub for update:', err);
        });
    }
});
