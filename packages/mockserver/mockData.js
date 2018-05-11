import faker from 'faker'
import _ from 'lodash'

faker.seed(1)

const generate = (count, generator) => _.times(count, generator)

const customers = generate(100, index => ({
    id: index,
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
}))

module.exports = { customers }
