import handleGetCustomers from 'handlers/handleGetCustomers'

const apiRoutes = router => {
    router.route('/customers').get(handleGetCustomers)
    return router
}

module.exports = apiRoutes
