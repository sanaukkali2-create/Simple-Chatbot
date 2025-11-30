// Function triggered when user clicks the Send button
function sendMessage() {

    // Get the input field element
    const inputField = document.getElementById("user-input");

    // Get user message & remove extra spaces
    const message = inputField.value.trim();

    // Do not send empty messages
    if (message === "") return;

    // Display the user's message in chat window
    addMessage(message, "user");

    // Clear the input box
    inputField.value = "";

    // Generate bot response
    botResponse(message);
}

// Function to add a message to the chat window
function addMessage(text, sender) {

    const chatBox = document.getElementById("chat-box"); // Chat display area

    const newMessage = document.createElement("div"); // Create new message bubble

    newMessage.classList.add("message", sender); // Add styling: user or bot

    newMessage.textContent = text; // Set message text

    chatBox.appendChild(newMessage); // Add message to the chat box

    // Auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}



// Function that decides how bot replies
function botResponse(userMsg) {

    let reply = ""; // Bot reply variable

    const msg = userMsg.toLowerCase(); // Convert input to lowercase


    // Chatbot logic rules
    if (msg.includes("hi") || msg.includes("hello")) {
        reply = "Hello! How can I help you?";
    } 
    else if (msg.includes("your name")) {
        reply = "I'm a simple JavaScript chatbot!";
    } 
    else if (msg.includes("help")) {
        reply = "Sure! Ask me anything about HTML, CSS, or JavaScript.";
    } 
    else if (msg.includes("bye")) {
        reply = "Goodbye! Have a great day!";
    } 
    else {
        reply = "Sorry, I didn't understand that.";
    }


    // Delay the bot message for natural feel
    setTimeout(() => addMessage(reply, "bot"), 500);
}