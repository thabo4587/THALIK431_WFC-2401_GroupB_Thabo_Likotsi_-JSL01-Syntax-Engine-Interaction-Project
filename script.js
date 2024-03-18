function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Check if input starts with "pet_"
    if (input.startsWith('pet_')) {
        // Check if the characters after "pet_" are all digits (year)
        let year = input.substring(4, 8);
        if (!isNaN(year)) {
            // Check if the characters after the year are all letters
            let petName = input.substring(8);
            let containsOnlyLetters = true;
            for (let i = 0; i < petName.length; i++) {
                if (!isLetter(petName[i])) {
                    containsOnlyLetters = false;
                    break;
                }
            }
            if (containsOnlyLetters) {
                result = "Valid Syntax";
            } else {
                result = "Invalid Syntax";
            }
        } else {
            result = "Invalid Syntax";
        }
    } else {
        result = "Invalid Syntax";
    }

    // Get the circle element
    let circle = document.querySelector('.circle');

    // Set background color based on result
    if (result === "Invalid Syntax") {
        circle.style.backgroundColor = 'red';
    } else if (result === "Valid Syntax") {
        circle.style.backgroundColor = 'green';
    }

    // Update result text
    document.getElementById('result').innerText = result;
}

// Helper function to check if a character is a letter
function isLetter(char) {
    // Define a string containing all lowercase and uppercase letters and characters
    const alphabet =' !"#$%&\'()*+,-./:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    // Check if the character is included in the alphabet string or character
    return alphabet.includes(char);
}
