function getLocalList(key) {
    if (typeof key === 'string') {
        var localList = localStorage.getItem(key)
        if (localList) {
            var parsedList = JSON.parse(localList)
            return parsedList
        } else {
            return []
        }
    }
}

var studentsList = getLocalList('studentsList')