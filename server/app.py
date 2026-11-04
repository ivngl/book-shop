from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

app = FastAPI()

origins = ["http://localhost:5174"]

app.add_middleware(CORSMiddleware, allow_origins=origins)


@app.get("/")
def test():
    return "hello"


@app.get("/books")
def get_books():
    return JSONResponse({"est": "tes"})
