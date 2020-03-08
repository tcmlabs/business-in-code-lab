import pytest
import psycopg2
import datetime
import functools

users = [(1, "John", "Doe", datetime.date(2020, 3, 4)),
                    (2, "Patrick", "Doz", datetime.date(2020, 3, 4)),
                    (3, "Laurent", "Paul", datetime.date(2020, 3, 4)),
                    (4, "Jeanne", "Bret", datetime.date(2020, 3, 4)),
                    (5, "Bob", "Douillet", datetime.date(2020, 3, 4)),
                    (6, "Anna", "Foch", datetime.date(2020, 3, 4)),
                    (7, "Clémence", "Gere", datetime.date(2020, 3, 4)),
                    ]

def get_users():
    conn = psycopg2.connect("dbname=lab user=giannid")
    cur = conn.cursor()
    cur.execute("SELECT * from users;")
    user_list = cur.fetchall()
    conn.close()

    return user_list

def get_full_name(user):
    full_name = user[1] + " " + user[2]
    return full_name

def get_users_full_name():
    users = get_users()

    return map(get_full_name, users)

expected = [
  "John Doe",
  "Patrick Doz",
  "Laurent Paul",
  "Jeanne Bret",
  "Bob Douillet",
  "Anna Foch",
  "Clémence Gere",
]

@pytest.mark.parametrize("expected",
                         expected)
def test_integration(expected):
    assert get_users_full_name() == expected

def test_db():
    expected = global_user_list
    assert get_users() == expected
