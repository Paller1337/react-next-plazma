const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const projectRoot = path.resolve(__dirname, '..')

const readSource = (relativePath) =>
    readFileSync(path.join(projectRoot, relativePath), 'utf8')

test('hotel page lists the infinity pool immediately after the peninsula pool', () => {
    const source = readSource('pages/hotel.tsx')

    assert.match(
        source,
        /Посещение бассейна на полуострове<\/Text>\r?\n\s*<Text[^>]*>- Тёплый двухуровневый бассейн Инфинити<\/Text>/
    )
})

test('room cards list the infinity pool immediately after the island pool with a droplet icon', () => {
    const source = readSource('components/objects/RoomObjectV2.tsx')

    assert.match(
        source,
        /\{ title: 'Теплый бассейн на острове', Icon: Icon\.Droplet \},\r?\n\s*\{ title: 'Тёплый двухуровневый бассейн Инфинити', Icon: Icon\.Droplet \}/
    )
})
