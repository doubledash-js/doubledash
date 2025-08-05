/**
 * The `escapeHtml()` function makes html XSS safe.
 * 
 * @param {string} string 
 * @returns {string}
 */
function escapeHtml(string) {
    
    let entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };

    return String(string).replace(/[&<>"'`=\/]/g, (s) => {
        return entityMap[s];
    });
}

export default escapeHtml;