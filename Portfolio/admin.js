
/// admin pannel
document.addEventListener("DOMContentLoaded", () => {
    const contactsTableBody = document.querySelector("#contactsTable tbody");
    const errorMessage = document.getElementById("errorMessage");
    const loadingIndicator = document.getElementById("loadingIndicator");
  
    const fetchContacts = async () => {
      try {
        // Show the loading indicator
        loadingIndicator.classList.remove("hidden");
  
        // Fetch data from the API
        const response = await fetch("http://localhost:3000/api/contact");
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
  
        const data = await response.json();
  
        // Hide the loading indicator
        loadingIndicator.classList.add("hidden");
  
        // Check if data is an array and populate the table
        if (Array.isArray(data) && data.length > 0) {
          const sortedData = data.sort((a, b) => (a._id < b._id ? 1 : -1));
          
          sortedData.forEach((contact) => {
            const row = document.createElement("tr");
  
            const nameCell = document.createElement("td");
            nameCell.textContent = contact.name;
  
            const emailCell = document.createElement("td");
            emailCell.textContent = contact.email;
  
            const messageCell = document.createElement("td");
            messageCell.textContent = contact.message;
  
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(messageCell);
  
            contactsTableBody.appendChild(row);
          });
        } else {
          throw new Error("No contacts found or data is not an array");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        errorMessage.textContent = `Error: ${error.message}`;
        errorMessage.classList.remove("hidden");
      } finally {
        // Hide the loading indicator
        loadingIndicator.classList.add("hidden");
      }
    };
  
    fetchContacts();
  });