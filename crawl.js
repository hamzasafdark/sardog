function normalizeURL(baseUrl) {
    if (baseUrl.includes('https') || baseUrl.includes('http')) {
        return true
    }
    return false
}

module.exports = {
    normalizeURL
}