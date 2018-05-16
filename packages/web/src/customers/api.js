import 'cross-fetch/polyfill'

import config from 'config'

const fetchCustomers = async () => {
    const response = await fetch(`${config.apiBaseUrl}/customers`)
    const { data, errorMessage } = await response.json()
    if (response.status >= 400) {
        throw new Error(
            `Bad response from server when getting customers: ${errorMessage}`,
        )
    }
    return data
}

export default { fetchCustomers }
