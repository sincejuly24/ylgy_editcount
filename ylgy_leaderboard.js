var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data.daily_count =
    '987654321'

  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
