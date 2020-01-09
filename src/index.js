const express = require('express')
const auth = require('./routes/auth')
const product = require('./routes/product')
const profile = require('./routes/profile')
const shipment = require('./routes/shipment')
const transaction = require('./routes/transaction')
const Route = express.Router()

Route
    .use('/api/v1/auth', auth)
    .use('/api/v1/products', product)
    .use('/api/v1/profile', profile)
    .use('/api/v1/shipment', shipment)
    .use('/api/v1/transaction', transaction)

module.exports = Route
