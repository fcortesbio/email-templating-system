/**
 * Utility functions for the Email Templating app
 */

/**
 * Processes a template string by replacing placeholders
 * @param {string} template - The template string with placeholders
 * @param {Object} replacements - Object with placeholder keys and replacement values
 * @return {string} The processed template with replacements
 */
function processTemplate(template, replacements) {
    if (!template) return '';
    
    let processed = template;
    
    // Replace each placeholder with its value
    Object.keys(replacements).forEach(key => {
      const placeholder = `{{${key}}}`;
      processed = processed.replace(new RegExp(placeholder, 'g'), replacements[key] || '');
    });
    
    return processed;
  }
  
  /**
   * Highlights manual placeholders in a template
   * @param {string} template - The template string with manual placeholders
   * @return {string} HTML string with highlighted placeholders
   */
  function highlightManualPlaceholders(template) {
    if (!template) return '';
    
    // Regex to find manual placeholders (format: xXSomethingXx)
    const manualPlaceholderRegex = /xX([^xX]+)Xx/g;
    
    // Replace placeholders with bold highlighted versions
    return template.replace(manualPlaceholderRegex, '<strong style="background-color: #ffff99; color: #333;">xX$1Xx</strong>');
  }