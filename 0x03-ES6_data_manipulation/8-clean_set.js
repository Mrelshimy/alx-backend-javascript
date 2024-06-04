function cleanSet(set, startString){
    let retString = ""
    set.forEach(element => {
        if (element.startsWith(startString)){
            retString += element + "-"
        }
    })
    return retString
}
console.log(cleanSet(new Set(["hello", "bello", "hamo", 4]), "h"))
