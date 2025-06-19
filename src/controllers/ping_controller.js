function pingCheck(req, res) {
    return res.json({
        message: "Alive from v1"
    })
}

function pingCheckV2(req, res) {
    return res.json({
        message: "Alive from v2"
    })
}


module.exports = {
    pingCheck,
    pingCheckV2
}