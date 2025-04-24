/**
 * Authentication related functions
 */

/**
 * Validates and processes user input for authentication
 * @param {string} input - The user input (EID or name)
 * @return {Object} Result object with success flag and user data or error message
 */
function validateUser(input) {
    if (!input || input.trim() === '') {
      return { 
        success: false, 
        message: 'Please enter your Employee ID or Name' 
      };
    }
    
    // If input is only numbers, treat as EID
    // If input contains letters, treat as name
    let processedInput = input.trim();
    
    if (/^\d+$/.test(processedInput)) {
      // It's an EID (numbers only)
      const user = getUser(processedInput);
      if (user) {
        return { 
          success: true, 
          user: user 
        };
      } else {
        return { 
          success: false, 
          message: 'Employee ID not found' 
        };
      }
    } else {
      // It's a name (contains letters)
      // Only keep the first word if multiple words
      processedInput = processedInput.split(' ')[0];
      
      const user = getUser(processedInput);
      if (user) {
        return { 
          success: true, 
          user: user 
        };
      } else {
        return { 
          success: false, 
          message: 'Name not found' 
        };
      }
    }
  }