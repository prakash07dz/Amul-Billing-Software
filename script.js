function calculateTotal() {
    let total = 0;

    const rows = document.querySelectorAll('.item-row');
    rows.forEach(row => {
        const price = parseFloat(row.querySelector('.price').value) || 0;
        const quantity = parseInt(row.querySelector('.quantity').value) || 0;
        const itemTotal = price * quantity;

        row.querySelector('.total').textContent = `${itemTotal.toFixed(2)}₹`;
        total += itemTotal;
    });

    document.getElementById('totalAmount').textContent = `${total.toFixed(2)}₹`;
}

function clearAll() {
    const rows = document.querySelectorAll('.item-row');
    rows.forEach(row => {
        row.querySelector('.quantity').value = 0;
        row.querySelector('.total').textContent = '0.00 ₹';
    });

    document.getElementById('totalAmount').textContent = '0.00 ₹';
}

document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('focus', function() {
        if (this.value === '0') {
            this.value = '';
        }
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.value = '0';
        }
    });
});
