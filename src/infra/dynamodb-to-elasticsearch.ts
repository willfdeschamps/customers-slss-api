'use strict'

import { pushStream } from 'dynamodb-stream-elasticsearch'
import { Handler, Context, Callback } from 'aws-lambda'

const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  try {
    console.log(
      'file: dynamo-to-elasticsearch.ts ~ line 19 ~ event',
      JSON.stringify(event),
    )

    const esEndpoint = process.env.ELASTICSEARCH_URL?.startsWith('http')
      ? process.env.ELASTICSEARCH_URL
      : `https://${process.env.ELASTICSEARCH_URL}`
    await pushStream({ event, endpoint: esEndpoint })
    return { body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.log('file: put.ts ~ line 27 ~ err', err)
    return { error: err }
  }
}

export default handler
