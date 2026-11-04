dev:
	uv run uvicorn app:app &
	cd client & npm run dev

lint:
	uv run ruff check --fix

format:
	uv run ruff format

check:
	make lint & make format

seed:
	python database/seed.py
