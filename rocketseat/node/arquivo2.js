function getFlagsValue(flag){
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}

module.exports = getFlagsValue

