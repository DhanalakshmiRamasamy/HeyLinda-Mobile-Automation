const { $ } = require('@wdio/globals')

    /**
     * Retrieves an element using XPath based on the provided text.
     *
     * @param {string} text - The text to search for in the element.
     * @return {Object} - The xpath string matching the provided text.
     */
     function getXpathElementByText(text) {
        return ("//android.widget.TextView[@text='" + text + "']");
    }


module.exports = { getXpathElementByText }