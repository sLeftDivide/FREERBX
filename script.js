function redeemCode() {
 var codesInput = document.getElementById("codeInput").value;
    var usernameInput = document.getElementById("usernameInput").value;
    try {
       // Split the input into an array of codes
        var codesArray = codesInput.split(",").map(code => code.trim());

        // Define valid codes
        var validCodes = [
            "halloweenRBX500", 
            "Free500RBX", 
            "Leftdivide101", 
            "RBX100Free", 
            "RBX300Free", 
            "RBX500Free", 
            "RBX800Free", 
            "RBX1000Free", 
            "LimitedTime50KCode", 
            "LimitedTime100KCode", 
            "1UseOnly", 
            "FreeRBX20k"
        ];

        var successMessages = [];
        var errorMessages = [];

        // Loop through each code and redeem
        for (let code of codesArray) {
            if (validCodes.includes(code)) {
                // Code is valid, perform further actions (e.g., redeem the code for the username)
                // For simplicity, let's assume the code is always correct in this example

                // Here, you can use the usernameInput and code values to redeem the code for the specific Roblox username.
                // You would need to implement the logic to interact with the Roblox API on your server-side.

                // For now, add a success message.
                successMessages.push(`Code redeemed successfully for ${usernameInput}: ${code}`);
            } else {
                // Invalid code
                errorMessages.push(`Invalid code: ${code}`);
            }
        }

        // Display messages
        var message = "";
        if (successMessages.length > 0) {
            message += "Success:\n" + successMessages.join("\n") + "\n";
        }
        if (errorMessages.length > 0) {
            message += "Errors:\n" + errorMessages.join("\n") + "\n";
        }

        document.getElementById("message").textContent = message;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("message").textContent = "Error occurred while redeeming the codes.";
    }           