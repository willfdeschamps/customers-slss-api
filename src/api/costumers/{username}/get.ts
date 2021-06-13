'use strict'

import AWS from 'aws-sdk'
import { Handler, Context, Callback } from 'aws-lambda'

import middy from 'middy'
import {
  httpHeaderNormalizer,
  jsonBodyParser,
  httpErrorHandler,
  cors,
} from 'middy/middlewares'
import { makeResponse, Response } from '../../../utils/response'

const docClient = new AWS.DynamoDB.DocumentClient({})
const constumerTable = process.env.COSTUMERS_TABLE || ''

const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  let response : Response;
  try {
    const { username } = event.pathParameters
    const item = await docClient
      .get({
        Key: {
         username 
        },
        TableName: constumerTable,
      })
      .promise()
    response = makeResponse(200, item.Item)
  } catch (err) {
    console.log("file: get.ts ~ line 29 ~ err", err)
    response = makeResponse(500, { code: 'INTERNAL_SERVER_ERROR', message: err })
  }
  return response
}

export default middy(handler)
  .use(httpHeaderNormalizer())
  .use(jsonBodyParser())
  .use(httpErrorHandler());
