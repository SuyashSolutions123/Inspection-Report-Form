    // fuction to generate reference code    
    function generateReferenceNumber() {
    const prefix = 'SSQC';
    // Get the current date and time
    const now = new Date();
    // Extract date parts
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based in JavaScript
    const year = String(now.getFullYear()).slice(-2); // Get last two digits of the year
    // Extract time parts
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // Form the date and time parts
    const datePart = `${day}${month}${year}`;
    const timePart = `${hours}${minutes}${seconds}`;
    const referenceNumber = `${prefix}-${datePart}/${timePart}`;// Form the reference number
    return referenceNumber;
}
    // console.log(generateReferenceNumber());
    var referenceNumber = generateReferenceNumber();
        const productData = {
            "products": [
                {
                    "name": "Product 1",
                    "code": "P001",
                    "fields": [
                        { "label": "POSITION OF U TUBE:- STRAIGHT", "name": "POSITION OF U TUBE:- STRAIGHT" },
                        { "label": "QUALITY OF CASTING:- NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING:- NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING:- CLEAN QUARTZ TUBE", "name": "FINISHING:- CLEAN QUARTZ TUBE" },
                          { "label": "WIRE RESISTANCE:- 17 +/- 0.5", "name": "WIRE RESISTANCE:- 17 +/- 0.5" }
                    ]
                },
                {
                    "name": "Product 2",
                    "code": "P002",
                    "fields": [
                        { "label": "Quality Check A", "name": "qca" },
                        { "label": "Quality Check B", "name": "qcb" },
                        { "label": "Quality Check C", "name": "qcc" }
                    ]
                },
                {
                    "name": "Product 3",
                    "code": "P003",
                    "fields": [
                        { "label": "Quality Check X", "name": "qcx" },
                        { "label": "Quality Check Y", "name": "qcy" },
                        { "label": "Quality Check Z", "name": "qcz" }
                    ]
                }
            ],
            "standardFields": [
                { "label": "Standard Check 1", "name": "std1" },
                { "label": "Standard Check 2", "name": "std2" },
                { "label": "Standard Check 3", "name": "std3" }
            ]
        };

        // Options for each dropdown
        const nameOptions = ["Name 1", "Name 2"];
        const supplierOptions = ["Supplier 1", "Supplier 2"];
        const productOptions = productData.products.map(product => product.name);

        // Set default date to current date
       document.addEventListener('DOMContentLoaded', () => {
       const today = new Date().toISOString().split('T')[0];
       document.getElementById('date').value = today;
       });
        // Function to handle 'other' option selection
        function handleOtherField(option, inputField) {
            const element = document.getElementById(inputField);
            if (element) {
                if (option === 'Other') {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                    element.value = '';
                }
            }
        }

        // Function to filter and show suggestions
        function showSuggestions(inputElement, suggestionsElement, options) {
            const filter = inputElement.value.toLowerCase().trim();
            const suggestions = options.filter(option => option.toLowerCase().includes(filter));
            suggestionsElement.innerHTML = suggestions.map(option => `<div class="suggestion-item" onclick="selectSuggestion('${option}', '${inputElement.id}', '${suggestionsElement.id}')">${option}</div>`).join('');
            suggestionsElement.style.display = suggestions.length > 0 ? 'block' : 'none';
        }

        // Function to handle suggestion selection
        function selectSuggestion(option, inputId, suggestionsId) {
            document.getElementById(inputId).value = option;
            document.getElementById(suggestionsId).style.display = 'none';
            handleOtherField(option, `other${inputId.charAt(0).toUpperCase() + inputId.slice(1, -5)}`);
            if (inputId === 'productInput') {
                updateItemCodeAndQualityChecks();
            }
        }

        // Function to handle item code input
        function handleItemCodeInput() {
            const itemCodeInput = document.getElementById('itemCodeInput');
            const productName = document.getElementById('productInput').value;
            const product = productData.products.find(p => p.code === itemCodeInput.value && p.name === productName);
            if (product) {
                generateQualityChecks(product.fields);
            } else {
                generateStandardQualityChecks();
            }
        }

        // Function to generate quality check fields based on product fields
        function generateQualityChecks(fields) {
            const qualityChecksContainer = document.getElementById('qualityChecksContainer');
            qualityChecksContainer.innerHTML = ''; // Clear previous fields
            
            fields.forEach(field => {
                const label = document.createElement('label');
                label.textContent = field.label;
    
                const checkRow = document.createElement('div');
                checkRow.classList.add('check-row');
    
                for (let i = 0; i < 3; i++) { // Generate three input fields per label
                    const input = document.createElement('input');
                    input.type = 'text';
                    
                    input.name = field.name; // Unique name for each input
                    checkRow.appendChild(input);
                }
    
                qualityChecksContainer.appendChild(label);
                qualityChecksContainer.appendChild(checkRow);
            });
        }

        // Function to generate standard quality check fields
        function generateStandardQualityChecks() {
            const qualityChecksContainer = document.getElementById('qualityChecksContainer');
            qualityChecksContainer.innerHTML = ''; // Clear previous fields
            
            productData.standardFields.forEach(field => {
                const label = document.createElement('label');
                label.textContent = field.label;
    
                const checkRow = document.createElement('div');
                checkRow.classList.add('check-row');
    
                for (let i = 0; i < 3; i++) { // Generate three input fields per label
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.name = field.name; // Unique name for each input
                    checkRow.appendChild(input);
                }
    
                qualityChecksContainer.appendChild(label);
                qualityChecksContainer.appendChild(checkRow);
            });
        }

        // Hide suggestions when clicking outside
        document.addEventListener('click', (event) => {
            const inputIds = ['nameInput', 'supplierInput', 'productInput', 'itemCodeInput'];
            const suggestionsIds = ['nameSuggestions', 'supplierSuggestions', 'productSuggestions', 'itemCodeSuggestions'];
            inputIds.forEach(inputId => {
                const inputElement = document.getElementById(inputId);
                if (inputElement && !inputElement.contains(event.target)) {
                    const suggestionsElement = inputElement.nextElementSibling;
                    if (suggestionsElement) {
                        suggestionsElement.style.display = 'none';
                    }
                }
            });
            suggestionsIds.forEach(suggestionsId => {
                const suggestionsElement = document.getElementById(suggestionsId);
                if (suggestionsElement && !suggestionsElement.contains(event.target)) {
                    suggestionsElement.style.display = 'none';
                }
            });
        });

        // Attach event listeners for input fields
        document.getElementById('nameInput').addEventListener('input', () => {
            showSuggestions(document.getElementById('nameInput'), document.getElementById('nameSuggestions'), nameOptions);
        });

        document.getElementById('supplierInput').addEventListener('input', () => {
            showSuggestions(document.getElementById('supplierInput'), document.getElementById('supplierSuggestions'), supplierOptions);
        });

        document.getElementById('productInput').addEventListener('input', () => {
            showSuggestions(document.getElementById('productInput'), document.getElementById('productSuggestions'), productOptions);
            updateItemCodeAndQualityChecks();
        });

        // Update item code and quality checks based on selected product
        function updateItemCodeAndQualityChecks() {
            const productName = document.getElementById('productInput').value;
            const product = productData.products.find(p => p.name === productName);
            if (product) {
                document.getElementById('itemCodeInput').value = product.code;
                generateQualityChecks(product.fields);
            } else {
                document.getElementById('itemCodeInput').value = '';
                generateStandardQualityChecks();
            }
        }

        document.getElementById('itemCodeInput').addEventListener('input', handleItemCodeInput);

        // Handle form submission
        function submitForm(event) {
            event.preventDefault(); // Prevent default form submission
            // no internet connection alert
              if (!navigator.onLine) {
        alert('No internet connection.');
        return;
    }
            // Gather form data
            const formData = {
                code: referenceNumber,
                name: document.getElementById('nameInput').value,
                date: document.getElementById('date').value,
                supplierName: document.getElementById('supplierInput').value,
                billNo: document.getElementById('billNo').value,
                invoiceQuantity: document.getElementById('invoiceQuantity').value,
                actualQuantity: document.getElementById('actualQuantity').value,
                productName: document.getElementById('productInput').value,
                itemCode: document.getElementById('itemCodeInput').value,
                qualityChecks: [],
                remark: document.getElementById('remark').value,
                actionTaken: document.getElementById('actionTaken').value
            };

      // Collect all quality check values
        const qualityChecksContainer = document.getElementById('qualityChecksContainer');
        const checkRows = qualityChecksContainer.querySelectorAll('.check-row');
        checkRows.forEach((row) => {
            const inputs = row.querySelectorAll('input');
            inputs.forEach((input) => {
                formData.qualityChecks.push({ name: input.name, value: input.value });
            });
        });
            

            // Prepare data to send
            // const dataToSend = JSON.stringify(formData);
             console.log(formData);
             var url = 'https://script.google.com/macros/s/AKfycbx3KuOILr4Xl8SQe5JEJiUbO09EMWKIsDUUi8cesyedU6Yrg9hE_486bvPZp63fyVygkg/exec';
                fetch(url, {
                    redirect:"follow",
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8',
                    },
                   
                })
                .then(response => {
            console.log('Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);
            if (data.status === 'success') {
                alert("Form submitted successfully.\nReference number :- "+referenceNumber );
                document.getElementById('inspectionForm').reset();
                document.getElementById('date').value = new Date().toISOString().split('T')[0];
                document.getElementById('qualityChecksContainer').innerHTML = '';
            } else {
                throw new Error('Failed to submit form.');
            }
        })
        .catch((error) => {
            alert('Failed to submit the form.');
            console.error('Error:', error);
        });
};
         document.addEventListener('focusin', (event) => {
            const target = event.target;
            if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
   
