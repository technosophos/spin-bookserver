import json
from spin_sdk.http import IncomingHandler, Request, Response, send

# Allows us to load the service URL from config, instead of hard-coding
from spin_sdk import variables


class IncomingHandler(IncomingHandler):
    def handle_request(self, request: Request) -> Response:
        # Get the URL from config
        url = variables.get("book_api_url")
        # Get the book of the day from JS:
        resp = send(Request("GET", url, {}, None))

        book = json.loads(resp.body.decode("utf-8"))
        msg = f"Today's book is _{book['title']}_ by {book['author']}"

        return Response(200, {"content-type": "text/plain"}, bytes(msg, "utf-8"))
