# Infinity Pool Included Service Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Добавить отдельный пункт «Тёплый двухуровневый бассейн Инфинити» рядом с существующей услугой бассейна в двух согласованных блоках сайта.

**Architecture:** Сохранить текущую структуру обоих списков и внести по одной локальной вставке без новой общей абстракции. Защитить точную формулировку и порядок пунктов небольшими исходниковыми тестами на встроенном `node:test`.

**Tech Stack:** Next.js 13, React 18, TypeScript/TSX, Node.js `node:test`.

## Global Constraints

- Точный новый текст: `Тёплый двухуровневый бассейн Инфинити`.
- Новый пункт является отдельной строкой и не заменяет существующие услуги бассейна.
- Новый пункт располагается непосредственно после существующей услуги бассейна в каждом блоке.
- В карточке номера новая строка использует `Icon.Droplet`.
- Остальные пункты, формулировки и порядок не изменяются.

---

### Task 1: Add the infinity-pool service to both included-service lists

**Files:**
- Create: `tests/infinity-pool-included-service.test.js`
- Modify: `pages/hotel.tsx:192`
- Modify: `components/objects/RoomObjectV2.tsx:15`

**Interfaces:**
- Consumes: существующая JSX-разметка списка в `pages/hotel.tsx` и массив `INCLUDED_SUMMER_SERVICES` в `components/objects/RoomObjectV2.tsx`.
- Produces: отдельный отображаемый пункт `Тёплый двухуровневый бассейн Инфинити` в обоих блоках; в карточках номеров объект имеет форму `{ title: string, Icon: Icon.Droplet }`.

- [ ] **Step 1: Write the failing source-order tests**

Create `tests/infinity-pool-included-service.test.js`:

```js
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
```

- [ ] **Step 2: Run the tests and verify the RED state**

Run:

```powershell
node --test tests/infinity-pool-included-service.test.js
```

Expected: `2` failed tests. Both failures must report that the expected adjacent new service text is missing from the corresponding source file.

- [ ] **Step 3: Add the page-level service line**

In `pages/hotel.tsx`, insert the new `Text` immediately after the existing peninsula-pool line:

```tsx
<Text fz={isMobile ? 15 : 16} fw={400}>- Посещение бассейна на полуострове</Text>
<Text fz={isMobile ? 15 : 16} fw={400}>- Тёплый двухуровневый бассейн Инфинити</Text>
```

- [ ] **Step 4: Add the room-card service item**

In `components/objects/RoomObjectV2.tsx`, insert the new object immediately after the existing island-pool object:

```tsx
{ title: 'Теплый бассейн на острове', Icon: Icon.Droplet },
{ title: 'Тёплый двухуровневый бассейн Инфинити', Icon: Icon.Droplet },
```

- [ ] **Step 5: Run the focused tests and verify the GREEN state**

Run:

```powershell
node --test tests/infinity-pool-included-service.test.js
```

Expected: `2` tests pass, `0` fail.

- [ ] **Step 6: Run project verification**

Run:

```powershell
npm run lint
npm run build
git diff --check
```

Expected: lint and build exit with code `0`; `git diff --check` prints no whitespace errors.

- [ ] **Step 7: Review the scoped diff**

Run:

```powershell
git diff -- tests/infinity-pool-included-service.test.js pages/hotel.tsx components/objects/RoomObjectV2.tsx
```

Expected: one test file and exactly one new service entry in each production file; no unrelated changes.

- [ ] **Step 8: Commit the implementation**

```powershell
git add -- tests/infinity-pool-included-service.test.js pages/hotel.tsx components/objects/RoomObjectV2.tsx docs/superpowers/plans/2026-07-10-infinity-pool-included-service.md
git commit -m "feat: add infinity pool to included services"
```
