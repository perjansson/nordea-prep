import { customers } from 'mockData'

const handleGetCustomers = (req, res) => {
    res.json({ data: customers })
    // res.status(500).send({ errorMessage: 'Something broke!' })
}

module.exports = handleGetCustomers
