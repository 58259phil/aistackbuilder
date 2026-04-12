// functions/api/counter.js — read and increment the stack counter

export async function onRequestGet(context) {
  const { env } = context
  const count = await env.STACK_COUNTER.get('count') || '999'
  return new Response(JSON.stringify({ count: parseInt(count) }), {
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}

export async function onRequestPost(context) {
  const { env } = context
  const current = await env.STACK_COUNTER.get('count') || '999'
  const next = parseInt(current) + 1
  await env.STACK_COUNTER.put('count', String(next))
  return new Response(JSON.stringify({ count: next }), {
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}
