import { gql } from '@apollo/client';

const ALL_CAKES = gql`
query Query {
  cakes {
    id
    image
    title
    category
    amount
    description
    mass
    content
    composition
    additionally
  }
}
`

const SAVE_CUSTOM_CAKES = gql`
mutation CreateCustomCakes($id: String!, $image: String!, $description: String!, $name: String!, $email: String!, $number: String!) {
  createCustomCakes(id: $id, image: $image, description: $description, name: $name, email: $email, number: $number) {
    id
    image
    description
    name
    email
    number
  }
}
`

const SAVE_OUR_CAKES = gql`
mutation CreateOurCakes($id: String!, $cakes: [[String!]!]!, $price: String!, $name: String!, $email: String!, $number: String!, $sity: String!, $street: String!, $house: String!, $apartment: String!, $comment: String!, $date: String!, $timeInterval: String!, $paymentMethod: String!) {
  createOurCakes(id: $id, cakes: $cakes, price: $price, name: $name, email: $email, number: $number, sity: $sity, street: $street, house: $house, apartment: $apartment, comment: $comment, date: $date, timeInterval: $timeInterval, paymentMethod: $paymentMethod) {
    id
    cakes
    price
    name
    email
    number
    sity
    street
    house
    apartment
    comment
    date
    timeInterval
    paymentMethod
  }
}
`

const ALL_NUMBERS = gql`
query CakesNumber {
  cakesNumber {
    id
    number
  }
}
`

const ALL_CUSTOM_CAKES = gql`
query CustomCakes {
  customCakes {
    id
    image
    description
    name
    email
    number
  }
}
`

const ALL_OUR_CAKES = gql`
query Query {
  ourCakes {
    id
    cakes
    price
    name
    email
    number
    sity
    street
    house
    apartment
    comment
    date
    timeInterval
    paymentMethod
  }
}
`

const REMOVE_CAKES_NUMBER = gql`
mutation Mutation($id: String!) {
  removeCakesNumber(id: $id)
}
`

const REMOVE_CUSTOM_CAKES = gql`
mutation Mutation($id: String!) {
  removeCustomCakes(id: $id)
}
`

const REMOVE_OUR_CAKES = gql`
mutation Mutation($id: String!) {
  removeOurCakes(id: $id)
}
`

export {
  ALL_CAKES,
  SAVE_OUR_CAKES,
  SAVE_CUSTOM_CAKES,
  ALL_NUMBERS,
  ALL_CUSTOM_CAKES,
  ALL_OUR_CAKES,
  REMOVE_CAKES_NUMBER,
  REMOVE_CUSTOM_CAKES,
  REMOVE_OUR_CAKES,
}