function pingCheck(req, res) {
    return res.json({
        message: "Alive"
    })
}

module.exports = pingCheck