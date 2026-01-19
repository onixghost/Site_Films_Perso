/* ========================================
   MODAL FUNCTIONS
   ======================================== */

/**
 * Opens the modal window
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

/**
 * Closes the modal window
 * @param {string} modalId - The ID of the modal to close
 */
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

/**
 * Close modal when clicking outside of it
 */
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});
