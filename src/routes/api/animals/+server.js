import { json } from "@sveltejs/kit"

export function GET() {
  const animals = [
    { name: 'cat' },
    { name: 'dog' },
    { name: 'bird' },
    { name: 'fish' },
    { name: 'lizard' },
    { name: 'snake' },
    { name: 'hamster' },
    { name: 'gerbil' },
    { name: 'rabbit' },
    { name: 'guinea pig' },
    { name: 'chinchilla' },
    { name: 'hedgehog' },
    { name: 'turtle' },
    { name: 'frog' },
    { name: 'toad' },
    { name: 'salamander' },
    { name: 'penguin' },
  ]

  return json(animals)
}
