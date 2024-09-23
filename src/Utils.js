function isInteger(input) {
    // Use trim() to remove any leading/trailing spaces and ensure it's a valid integer
    return /^\d+$/.test(input.trim());
}

function lst_string(elements) {
    let res = ""
    for (const element of elements) {res += (element.toString() + ", ");}
    return res.substring(0, res.length - 2)
}