import exp from 'express'

const app = exp()

app.get('/', (_, res) => res.send('Hello World'))

app.listen(3000, () => console.log('Server up on port:', 3000))