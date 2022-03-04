export async function handler(event) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hi there my name is Afkas and I dont like "Hello World" applications. \n ${event.requestContext.time}`,
  };
}
