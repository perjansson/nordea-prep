import faker from 'faker'
import times from 'lodash/times'

faker.seed(1)

const generate = (count, generator) => times(count, generator)

const customers = generate(100, index => ({
    id: index,
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
}))

module.exports = { customers }
