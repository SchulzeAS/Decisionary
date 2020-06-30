class Poll
{
    /**
     * representation of a poll
     * @param {string} id Identifier for the poll
     * @param {string} title Title of the poll
     * @param {string} description Description of the poll
     */
    constructor(id, title, description)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.alternatives = new Array();
        this.criterias = new Array();
    }

    /**
     * adds a new alternative to the array of alternatives
     * @param {string} alternative Name of the alternative
     */
    addAlternative(alternative)
    {
        this.alternatives.push(alternative);
        this.criterias.forEach(e =>
                               {
                                   e.values[e.values.length] = "";
                               });
        return this.alternatives;
    }

    /**
     * removes the alternative at a given index
     * @param {int} index Index of the alternative to be removed
     */
    removeAlternative(index)
    {
        if (index >= 0 && index < this.alternatives.length && this.alternatives.length > 2)
        {
            this.alternatives.splice(index, 1);
            this.criterias.forEach(e =>
                                   {
                                       e.values.pop();
                                   });
        }
        return this.alternatives;
    }

    /**
     * returns a string array containing all alternatives
     */
    getAllAlternatives()
    {
        var array = new Array();
        this.alternatives.forEach(element =>
                                  {
                                      array.push(element);
                                  });
        return array;
    }

    /**
     * adds a new criteria to the array of criterias
     * @param {string} criteriaName Name of the criteria
     */
    addCriteria(criteriaName)
    {
        this.criterias.push(new Criteria(criteriaName, this.alternatives.length));
        return this.criterias;
    }

    /**
     * removes the criteria at a given index
     * @param {int} index Index of the criteria to be removed
     */
    removeCriteria(index)
    {
        if (index >= 0 && index < this.criterias.length && this.criterias.length > 1)
        {
            this.criterias.splice(index, 1);
        }
        return this.criterias;
    }

    /**
     * returns a string array containing all criterias
     */
    getAllCriterias()
    {
        var array = new Array();
        this.criterias.forEach(element =>
                               {
                                   array.push(element.name);
                               });
        return array;
    }

    /**
     * moves the criteria at given index one position to the front
     * @param {int} index Index of the criteria to be moved
     */
    moveCriteriaUp(index)
    {
        if (index > 0 && index < this.criterias.length)
        {
            this.swapCriterias(index - 1, index);
        }
        return this;
    }

    /**
     * moves the criteria at given index one position to the back
     * @param {int} index Index of the criteria to be moved
     */
    moveCriteriaDown(index)
    {
        if (index >= 0 && index < this.criterias.length - 1)
        {
            this.swapCriterias(index, index + 1);
        }
        return this;
    }

    /**
     * swaps criteria at index1 with criteria at index2
     * @param {int} index1 Index of the first criteria
     * @param {int} index2 Index of the second criteria
     */
    swapCriterias(index1, index2)
    {
        if (index1 >= 0 && index1 < this.criterias.length - 1 &&
            index2 > 0 && index2 < this.criterias.length &&
            index1 < index2)
        {
            var tmp = this.criterias[index1];
            this.criterias[index1] = this.criterias[index2];
            this.criterias[index2] = tmp;
        }
    }

    /**
     * returns the name of the best alternative, based on the criteria ratings
     */
    evaluate()
    {
        var valueMatrix = [ this.alternatives.slice() ];
        for (let i = 0; i < this.criterias.length; i++)
        {
            const element = this.criterias[i];
            valueMatrix.push(element.values.slice());
        }
        for (let valueIdx = 1; valueIdx < valueMatrix.length; valueIdx++)
        {
            const row = valueMatrix[valueIdx];
            var ref = "";
            for (let j = 0; j < row.length; j++)
            {
                if (row[j].length == 1 && (row[j].toUpperCase() == ratingNames[0] || row[j].toUpperCase() == ratingNames[1] || row[j].toUpperCase() == ratingNames[2]))
                {
                    if (ref.length < 1 || row[j] < ref)
                    {
                        ref = row[j].toUpperCase();
                    }
                }
            }

            if (ref.length == 0)
            {
                continue;
            }

            for (let j = row.length - 1; j >= 0; j--)
            {
                if (row[j].length == 0 || row[j] > ref)
                {
                    valueMatrix.forEach(element =>
                                        {
                                            element.splice(j, 1);
                                        });
                }
            }

            if (valueMatrix.length == 1)
            {
                return { decidingIndex: valueIdx - 1, bestAlternatives: valueMatrix[0] };
            }
        }
        if (valueMatrix.length > 0)
        {
            return { decidingIndex: -1, bestAlternatives: valueMatrix[0] };
        }
        else
        {
            return { decidingIndex: -1, bestAlternatives: new Array() };
        }
    }
}