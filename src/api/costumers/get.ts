'use strict'

import AWS from 'aws-sdk'
const docClient = new AWS.DynamoDB.DocumentClient({})
import { Handler, Context, Callback } from 'aws-lambda'

const constumerTable = process.env.COSTUMERS_TABLE || ''

const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  try {
    const { lastKey, limit = 10 } = event.queryStringParameters || {}
    const items = await docClient
      .scan({
        ExclusiveStartKey: lastKey && JSON.parse(lastKey),
        Limit: limit,
        TableName: constumerTable,
      })
      .promise()

    return {
      body: JSON.stringify({
        meta: {
          lastKey: items.LastEvaluatedKey,
          count: items.Count,
        },
        data: items.Items,
      }),
    }
  } catch (err) {
    console.log('file: get.ts ~ line 27 ~ err', err)
    return { error: err }
  }
}

export default handler
