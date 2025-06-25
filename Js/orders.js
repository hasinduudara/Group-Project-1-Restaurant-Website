
        // Toggle between takeout and delivery forms
        document.getElementById('takeout').addEventListener('change', function() {
            document.getElementById('takeoutForm').classList.add('active');
            document.getElementById('deliveryForm').classList.remove('active');
        });
        
        document.getElementById('delivery').addEventListener('change', function() {
            document.getElementById('deliveryForm').classList.add('active');
            document.getElementById('takeoutForm').classList.remove('active');
        });
        
        // Calculate totals when quantity changes
        document.querySelectorAll('.form-select-sm').forEach(select => {
            select.addEventListener('change', function() {
                const row = this.closest('tr');
                const price = parseFloat(row.cells[1].textContent.replace('$', ''));
                const qty = parseInt(this.value);
                const total = price * qty;
                row.cells[3].textContent = '$' + total.toFixed(2);
                updateTotals();
            });
        });
        
        function updateTotals() {
            let subtotal = 0;
            document.querySelectorAll('tbody tr').forEach(row => {
                const totalCell = row.cells[3].textContent;
                if (totalCell !== '$0.00') {
                    subtotal += parseFloat(totalCell.replace('$', ''));
                }
            });
            
            const tax = subtotal * 0.08;
            const total = subtotal + tax;
            
            document.querySelector('tfoot tr:nth-child(1) th:nth-child(2)').textContent = '$' + subtotal.toFixed(2);
            document.querySelector('tfoot tr:nth-child(2) th:nth-child(2)').textContent = '$' + tax.toFixed(2);
            document.querySelector('tfoot tr:nth-child(3) th:nth-child(2)').textContent = '$' + total.toFixed(2);
        }

