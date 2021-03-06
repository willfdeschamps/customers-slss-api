'use strict'

import AWS from 'aws-sdk'
import { Handler, Context, Callback } from 'aws-lambda'

import middy from 'middy'
import {
  validator,
  httpHeaderNormalizer,
  jsonBodyParser,
  httpErrorHandler,
  cors,
} from 'middy/middlewares'
import { makeResponse, Response } from '../../utils/response'

import costumerPutSchema from './costumer.put.schema'
import validate from './costumer.put.validation'

const docClient = new AWS.DynamoDB.DocumentClient({})
const constumerTable = process.env.COSTUMERS_TABLE || ''

const handler: Handler = async (event: any) => {
  let response: Response
  try {
    const item = event.body
    validate(item)
    await docClient
      .put({
        Item: item,
        TableName: constumerTable,
      })
      .promise()

    response = makeResponse(200, { ok: true })
  } catch (err) {
    response = err.code
      ? makeResponse(400, err)
      : makeResponse(500, {
          code: 'INTERNAL_SERVER_ERROR',
          message: err,
        })
  }

  return response
}

export default middy(handler)
  .use(httpHeaderNormalizer())
  .use(jsonBodyParser())
  .use(validator({ inputSchema: costumerPutSchema }))
  .use(httpErrorHandler())
