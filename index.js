const brain      = require('brain.js')
const trainData  = require('./src/training-data')
const serializer = require('./src/serializer')
const net        = new brain.NeuralNetwork()

net.train(serializer.serialize(trainData))

const output = net.run(serializer.encode('Nothing is not ok'))

console.log(output)
