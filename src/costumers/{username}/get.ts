'use strict'

import AWS from 'aws-sdk'
const docClient = new AWS.DynamoDB.DocumentClient({
  region : process.env.REGION,
  endpoint : process.env.DYNAMODB_ENDPOINT,
})
import { Handler, Context, Callback } from 'aws-lambda'

const constumerTable = process.env.COSTUMERS_TABLE || ''

const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
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
    return { body: JSON.stringify(item.Item) }
  } catch (err) {
    console.log("file: get.ts ~ line 29 ~ err", err)
    return { error: err }
  }
}

export default handler
