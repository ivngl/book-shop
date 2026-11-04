import random

from faker import Faker

from .db import Base, SessionLocal, engine
from .models import Category, Product

fake = Faker()


def seed_db():
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    try:
        categories = [Category(name=fake.catch_phrase().split()[0]) for _ in range(5)]
        db.add_all(categories)
        db.flush()

        products = [
            Product(name=fake.word(), price=round(random.uniform(10.0, 500.0), 2))
        ]

        db.add_all(products)
        db.flush()

        db.commit()

    except Exception as e:
        print(e)
        db.rollback()
    finally:
        db.close()


if __name__ == "__main__":
    seed_db()
