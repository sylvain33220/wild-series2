const sayWelcome = (req,res) => {
    console.info(req.query)

    res.send(`Welcome to wild-series , ${req.query.name} !!!`)
}


module.exports = { sayWelcome };