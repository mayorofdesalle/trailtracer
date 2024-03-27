/**
 * function changeFocus(e, inputList, setFocus)
 * @param {object} e - The event object
 * @param {array} inputList - The list of input names
 * @param {function} setFocus - The setFocus function
 * @description
 * Changes the focus to the next input field when the Enter key is pressed.
 */
const changeFocus = (e, inputList, setFocus) => {
    const activeInput = document.activeElement.name;

    if (activeInput !== inputList.slice(-1)[0] && e.key === 'Enter') {
        e.preventDefault();
        setFocus(inputList[(inputList.indexOf(activeInput) + 1) % inputList.length]);
    }
};

export default changeFocus;