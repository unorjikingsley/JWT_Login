const login = async (req, res) => {
  res.send('Fake')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res
    .status(200)
    .json({
      msg: `Hello, King`,
      secret: `Here is your authorized number: ${luckyNumber}`,
    })
}

module.exports = {
  login,
  dashboard,
}
