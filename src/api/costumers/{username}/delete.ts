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
    const { username } = event.pathParameters
    await docClient
      .delete({
        Key: {
          username,
        },
        TableName: constumerTable,
      })
      .promise()

    return { body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.log('file: get.ts ~ line 29 ~ err', err)
    return { error: err }
  }
}

export default handler
