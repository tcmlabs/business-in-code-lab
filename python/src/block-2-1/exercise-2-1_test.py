import pytest
import psycopg2
import datetime
import functools

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

def findUser(id):
    users = get_users()

    return map(get_full_name, users)

inputs = [
  ((1, "John", "Doe", datetime.date(2020, 3, 4)), "John Doe"),
  ((2, "Patrick", "Doz", datetime.date(2020, 3, 4)), "Patrick Doz"),
  ((3, "Laurent", "Paul", datetime.date(2020, 3, 4)), "Laurent Paul"),
  ((4, "Jeanne", "Bret", datetime.date(2020, 3, 4)), "Jeanne Bret"),
  ((5, "Bob", "Douillet", datetime.date(2020, 3, 4)), "Bob Douillet"),
  ((6, "Anna", "Foch", datetime.date(2020, 3, 4)), "Anna Foch"),
  ((7, "Clémence", "Gere", datetime.date(2020, 3, 4)), "Clémence Gere")
]

@pytest.mark.parametrize("test_input,expected",
                         inputs)
def test_eval(test_input, expected):
    assert get_full_name(test_input) == expected
