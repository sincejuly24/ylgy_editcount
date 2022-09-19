var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data.daily_count =
    '99999999'

  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
