process.on('unhandledRejection', (reason) => {
  console.log(reason) // 打印"Hello, Fundebug!"
})

function a() {
  return Promise.reject('a')
}

async function test() {
  await a().catch((e) => {
    console.log(11, e)
  })
}

test()
