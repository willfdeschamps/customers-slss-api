'use strict'

import AWS from 'aws-sdk'
const docClient = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
  endpoint: process.env.DYNAMODB_ENDPOINT,
})
import { Handler, Context, Callback } from 'aws-lambda'

const constumerTable = process.env.COSTUMERS_TABLE || ''

const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  try {
    const item = JSON.parse(event.body)

    await docClient
      .put({
        Item: item,
        TableName: constumerTable,
      })
      .promise()

    return { body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.log('file: put.ts ~ line 27 ~ err', err)
    return { error: err }
  }
}

export default handler
