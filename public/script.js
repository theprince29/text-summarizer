document.getElementById('summarizeBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    
    if (!inputText.trim()) {
        alert("Please enter text to summarize.");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: inputText })
        });

        const result = await response.json();
        document.getElementById('summaryText').innerText = result.summary || "No summary generated.";
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('summaryText').innerText = "An error occurred. Please try again.";
    }
});
