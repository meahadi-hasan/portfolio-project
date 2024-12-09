const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("contactForm");
	const toast = document.getElementById("toast");
	const submitBtn = document.getElementById("submitBtn");
  
	const showToast = (message, isError = false) => {
	  toast.textContent = message;
	  toast.style.backgroundColor = isError ? "#f44336" : "#4caf50";
	  toast.className = "toast show";
	  setTimeout(() => (toast.className = "toast"), 3000);
	};
  
	form.addEventListener("submit", async (e) => {
	  e.preventDefault();
	  submitBtn.disabled = true;
	  submitBtn.textContent = "Submitting...";
  
	  const formData = {
		name: form.name.value,
		email: form.email.value,
		message: form.message.value,
	  };
  
	  try {
		const response = await fetch("http://localhost:3000/api/contact", {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(formData),
		});
  
		const result = await response.json();
  
		if (response.ok) {
		  showToast("Message submitted successfully!");
		  form.reset();
		} else {
		  showToast(result.error || "Failed to submit the form. Please try again.", true);
		}
	  } catch (error) {
		console.error("Error submitting the form:", error);
		showToast("An error occurred while submitting the form.", true);
	  } finally {
		submitBtn.disabled = false;
		submitBtn.textContent = "Submit Now";
	  }
	});
  });
  
  
  


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
