var sortable;




/**
 * appends each criteria to the criteria ordering view
 * @param {array} critArray array of criterias
 * @param {string} divId id to append to
 */
function loadCriterias(critArray, divId)
{
    for (i = 0; i < critArray.length; i++)
    {
        var newSpan = document.createElement('span');
        var newSpanCrit = document.createElement('span');
        var newSpanNumber = document.createElement('span');
        var newSpanImage = document.createElement('img');

        newSpanImage.src = "verticalMove.png";
        newSpanImage.className = "verticalMove";

        newSpanNumber.innerHTML = (i + 1) + ".";
        newSpanNumber.className = "critSpanNumber";
        
        newSpan.className = "critSpan";
        newSpanCrit.className = "critSpanInside";
        newSpan.id = "critSpan" + i;
        newSpanCrit.innerHTML = critArray[i];
        newSpan.appendChild(newSpanNumber);
        newSpan.appendChild(newSpanCrit);
        newSpan.appendChild(newSpanImage);
        document.getElementById(divId).appendChild(newSpan);
    }

    var el = document.getElementById(divId);
    sortable = Sortable.create(el,
        {
            handle: '',
            delay: 50,
            animation: 150,
            ghostClass: "sortable-ghost",  // Class name for the drop placeholder
            chosenClass: "sortable-chosen",  // Class name for the chosen item
            dragClass: "sortable-drag",  // Class name for the dragging item
            //direction: 'vertical', // Direction of Sortable (will be detected automatically if not given)
            onEnd: function (/**Event*/evt) {
                var itemEl = evt.item;  // dragged HTMLElement
                /*console.log(evt.to);    // target list
                console.log(itemEl);    // target list
                console.log(evt.from);  // previous list
                console.log(evt.oldIndex);  // element's old index within old parent
                console.log(evt.newIndex);  // element's new index within new parent */
                itemEl.draggable = true;
                console.log("------ ended sorting -------");
                rearrangedCrits();
            },
        });
}

/**
 * called after rearranging the criterias
 * resorts the criteries in the poll criteria array according to there position in the new list
 * */
function rearrangedCrits()
{
    critNumbers = document.getElementsByClassName("critSpanNumber");

    for (var i = 0; i < critNumbers.length; i++)
    {
        critNumbers[i].innerHTML = (i + 1) + ".";
    }

    var copyPoll = JSON.parse(JSON.stringify(currentPoll)); // create a deep copy from poll
    //console.log(currentPoll.criterias);

    critInside = document.getElementsByClassName("critSpanInside");
    var newCritOrderArrayString = new Array(currentPoll.criterias.length);
    for (var h = 0; h < critInside.length; h++) {
        //console.log(critInside[h].innerHTML);
        var t = critInside[h].innerHTML;
        //console.log("'" + t+ "' was position in old poll: " + findOldIndex(t));
        console.log(critInside[h].innerHTML);
        newCritOrderArrayString[h] = critInside[h].innerHTML;
        //var x = currentPoll.criterias.name.indexOf(critInside[i].innerHTML) //= (i + 1) + ".";
    }
    console.log(newCritOrderArrayString);

    for (var j = 0; j < newCritOrderArrayString.length; j++)
    {
        var t = newCritOrderArrayString[j];
        console.log("/   " + j + " " + t + "\/");
        var oldIndex = findOldIndex(t, copyPoll);
        console.log("'" + t + "' was position in old poll: " + oldIndex);
        console.log("copy poll name old " + copyPoll.criterias[oldIndex].name);
        currentPoll.criterias[j] = copyPoll.criterias[oldIndex];

    }
    console.log(currentPoll.criterias);
    afterCritOrder();

}

function afterCritOrder() {
    document.getElementById("alternativeRatingTable").innerHTML = "";
    createTableRating(currentPoll.getAllCriterias(), ratingNames, "alternativeRatingTable");
    updateAlternativeHUD();
}

function findOldIndex(text,oldPoll)
{
    console.log("looking for: " + text);
    for (var i = 0; i < oldPoll.criterias.length; i++) {
        console.log(i + "| " + oldPoll.criterias[i].name);
        if (oldPoll.criterias[i].name == text) {
            return i;
        }
    }
    return -1;
}
