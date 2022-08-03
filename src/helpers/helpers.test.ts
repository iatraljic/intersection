import { intersection } from './intersection'

test('intesection function, number', () => {
  const iterated = [1, 3, 5, 7, 9]
  const hash = new Set([2, 3, 4, 5])

  expect(intersection(iterated, hash)).toBe(2)
})

test('intesection function, string', () => {
  const iterated = ['string1', 'string3', 'string5', 'string7', 'string9']
  const hash = new Set(['string2', 'string3', 'string4', 'string5'])

  expect(intersection(iterated, hash)).toBe(2)
})
