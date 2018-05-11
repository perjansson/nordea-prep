import fetch from 'cross-fetch'

import config from 'config'

const fetchCustomers = () =>
    fetch(`${config.apiBaseUrl}/customers`)
        .then(response => response.json())
        .then(json => json.data)

export default { fetchCustomers }
