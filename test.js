const it = (desc, fn) => {
  try {
    fn()
    console.log(`PASS: ${desc}`)
  } catch (error) {
    console.error(`FAIL: ${desc} ${error}`)
  }
}

const assert = (isTrue) => {
  if (!isTrue) {
    throw new Error('Assertion failed')
  }
}

it('should fail', () => {
  assert(0 === 1)
})

it('should pass', () => {
  assert(1 === 1)
})

