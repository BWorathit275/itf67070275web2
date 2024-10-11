function updateUsername() {
    const usernameInput = document.getElementById('username-input').value;
    const username = document.getElementById('username');
    username.textContent = usernameInput || 'Your Name';
}

function updateAvatar() {
    const imageUrl = document.getElementById('image-url').value;
    const avatar = document.querySelector('.avatar');
    avatar.style.backgroundImage = `url('${imageUrl}')`;
}

function addContact() {
    const name = document.getElementById('contact-name').value;
    const tel = document.getElementById('contact-tel').value;
    if (name && tel) {
        const table = document.getElementById('contact-table').querySelector('tbody');
        const rowCount = table.rows.length;
        const row = table.insertRow(rowCount);
        row.insertCell(0).textContent = rowCount + 1;
        row.insertCell(1).textContent = name;
        row.insertCell(2).textContent = tel;
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-tel').value = '';
    }
}

function exportCSV() {
    const rows = Array.from(document.querySelectorAll('#contact-table tr')).map(row => 
        Array.from(row.querySelectorAll('th, td')).map(cell => cell.textContent).join(',')
    );
    const csvContent = "data:text/csv;charset=utf-8," + rows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contacts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
