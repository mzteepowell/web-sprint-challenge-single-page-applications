import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialFriendsList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    dropdown: '',
    sauces: '',
    toppings: '',
    text_area: '',
  },
]

// 👉 simulating axios for [GET] and [POST]
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialFriendsList })
  },
  post(url, { dropdown, sauces, toppings, text_area }) {
    const newFriend = { id: uuid(), dropdown, sauces, toppings, text_area }
    return Promise.resolve({ status: 200, success: true, data: newFriend })
  }
}
