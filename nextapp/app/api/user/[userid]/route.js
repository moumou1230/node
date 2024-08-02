export async function GET(request, { params }) {
  return Response.json({ userid: params.userid });
}
