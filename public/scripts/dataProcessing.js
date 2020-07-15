/**
 * prepares the Poll oject for the next step
 * @param {int} viewIndex Index of the current view
 */
function modifyData(viewIndex) {
	switch (viewIndex) {
		case 0:
			var name = document.getElementById('NameInput').value;
			var description = document.getElementById('DescriptionInput').value;
			if (!currentPoll) {
				currentPoll = new Poll(
					createUuid(),
					name,
					description
				);
			} else {
				currentPoll.title = name;
				currentPoll.description = description;
			}
			break;
		default:
			break;
	}
}

/**
 * copies the content of the input field and changes the tooltip as feed back
 * @param {string} inputFieldId identifier of the inputfield
 * @param {string} tooltipId identifier of the tooltip
 */
function copyLink(inputFieldId, tooltipId) {
	var copyText = document.getElementById(inputFieldId);
	copyText.select();
	copyText.setSelectionRange(0, 99999); /*For mobile devices*/

	document.execCommand("copy");
	var tooltip = document.getElementById(tooltipId);
	tooltip.innerHTML = "Kopiert: " + copyText.value;
}

/**
 * hide the tooltip when the mouse moves out of the button area
 * @param {string} id of the tooltip
 */

function toolTipMouseOut(tooltipId) {
	var tooltip = document.getElementById(tooltipId);
	tooltip.innerHTML = "Link kopieren";
}
