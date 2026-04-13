async function getMessage() {
    const res = await fetch('/api/message');
    const data = await res.json();
    document.getElementById('output').innerText = data.message;
}