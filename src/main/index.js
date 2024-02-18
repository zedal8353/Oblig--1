var tickets = [];

function buyTicket() {
    var fornavn = document.getElementById('fornavn').value;
    var etternavn = document.getElementById('etternavn').value;
    var telefonnr = document.getElementById('telefonnr').value;
    var epost = document.getElementById('epost').value;

// Validate email
    if (!validateEmail(epost)) {
        alert('Vennligst skriv inn en gyldig e-postadresse.');
        return;
    }

// Validate phone number
    if (!validatePhoneNumber(telefonnr)) {
        alert('Vennligst skriv inn et gyldig telefonnummer (8 siffer).');
        return;
    }

// Check if all input fields have a value
    if (!fornavn || !etternavn || !telefonnr || !epost) {
        alert('Fyll ut alle inputfeltene.');
        return;
    }

    var ticket  = {
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost,
        movie: document.getElementById('movie').value // Assuming you have movie options
    };

    tickets.push(ticket);
    updateTicketList();

// Clear input fields
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefonnr').value = '';
    document.getElementById('epost').value = '';
    document.getElementById('movie').value = ''; // Clear movie selection
}

function validateEmail(email) {
// Regular expression for email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhoneNumber(phoneNumber) {
// Regular expression for phone number validation (for eksempel: 12345678)
    var re = /^\d{8}$/;
    return re.test(phoneNumber);
}

function updateTicketList() {
    var ticketListElement = document.getElementById('ticketList');
    ticketListElement.innerHTML = '';

    tickets.forEach(function(ticket) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Fornavn: ' + ticket.fornavn +
            ', Etternavn: ' + ticket.etternavn +
            ', Telefonnr: ' + ticket.telefonnr +
            ', Epost: ' + ticket.epost +
            ', Film: ' + ticket.movie;
        ticketListElement.appendChild(listItem);
    });
}

function deleteAllTickets() {
    tickets = [];
    updateTicketList();
}