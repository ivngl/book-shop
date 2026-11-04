from unittest import TestCase
from unittest.mock import patch

from app import get_books


class Api(TestCase):
    @patch("server.app.get_books")
    def test_get_books(self):
        response = get_books()
