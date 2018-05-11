import { customers } from 'mockData'

const handleGetCustomers = (req, res) => {
    res.json({ data: customers })
}

module.exports = handleGetCustomers
