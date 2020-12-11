// Helper Functions
export function eventListener(id, action, func) {
    return document.getElementById(id).addEventListener(action, func)
}