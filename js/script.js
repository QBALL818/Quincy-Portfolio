// ===== Simple Chatbot Logic =====
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");

// Show/Hide Chatbot
chatbotToggle.addEventListener("click", () => {
  chatbotContainer.style.display =
    chatbotContainer.style.display === "flex" ? "none" : "flex";
});

// Send Messages
chatbotSend.addEventListener("click", sendMessage);
chatbotInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userText = chatbotInput.value.trim();
  if (userText === "") return;
  
  addMessage(userText, "user-msg");
  chatbotInput.value = "";
  
  setTimeout(() => botResponse(userText), 600);
}

function addMessage(text, className) {
  const msg = document.createElement("div");
  msg.className = className;
  msg.textContent = text;
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function botResponse(input) {
  input = input.toLowerCase();

  // Sample Responses
  if (input.includes("hello") || input.includes("hi")) {
    addMessage("Hello! I'm Quincy’s assistant. Ask about his skills, projects, or resume!", "bot-msg");
  } 
  else if (input.includes("skills")) {
    addMessage("Quincy’s skills include Python, Networking, Cybersecurity, HTML, CSS, and JavaScript.", "bot-msg");
  }
  else if (input.includes("projects") || input.includes("github")) {
    addMessage("He has Python tools, a chatbot, a cybersecurity presentation, and this portfolio website.", "bot-msg");
  }
  else if (input.includes("resume")) {
    addMessage("His resume is on the Resume page and downloadable as a PDF.", "bot-msg");
  }
  else if (input.includes("contact")) {
    addMessage("You can contact Quincy using the Contact page form!", "bot-msg");
  }
  else if (input.includes("graduation")) {
    addMessage("Quincy's expected graduation is Spring 2026.", "bot-msg");
  }
  else if (input.includes("download")) {
    addMessage("You can download Quincy's resume from the resume page.", "bot-msg");
  }
  else if (input.includes("github")) {
    addMessage("You can only view the github links on a computer or laptop.", "bot-msg");
  }
  else {
    addMessage("Sorry, I don't have info on that. Try asking about skills, projects, or resume!", "bot-msg");
  }
}

// ===== Fade-in On Scroll =====
const fadeSections = document.querySelectorAll('.fade-section');

function revealOnScroll() {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Trigger on load

// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({behavior: "smooth"});
  });
});
