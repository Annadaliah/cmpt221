import pytest

from sqlalchemy import insert, select, text
from models import User

# test db connection
def test_db_connection(db_session):
    # Use db_session to interact with the database
    result = db_session.execute(text("SELECT 1"))
    assert result.scalar() == 1

# test to insert a user
# you can count this as one of your 5 test cases :)
def test_insert_user(db_session, sample_signup_input):
    insert_stmt = insert(User).values(sample_signup_input)

    # execute insert query
    db_session.execute(insert_stmt)
    # commit the changes to the db
    db_session.commit()

    # not part of the app.py code, just being used to get the inserted data
    selected_user = db_session.query(User).filter_by(FirstName="Calista").first()

    assert selected_user is not None
    assert selected_user.LastName == "Phippen"

# second test case
def test_check_user_email(db_session, sample_login_input):
        select_email = select(User).values(sample_login_input)

        db_session.execute(select_email)

        selected_user = db_session.query(User).filter_by(Email="calista.phippen1@marist.edu").email()

        if (User.Email != "callista.phippen1@marist.edu"):
              assert selected_user.Email == None

# third test case
def check_valid_user_password(db_session, sample_login_input):
        select_password = select(User).values(sample_login_input)

        db_session.execute(select_password)

        selected_user = db_session.query(User).filter_by(Password = "mypassword").password()

        if (User.Password != "mypassword"):
            assert selected_user.Password == None

# fourth test case
def email_already_exists(db_session, sample_signup_input):
      chosen_email = select(User).values(sample_signup_input)

      db_session.execute(chosen_email)

      selected_user = db_session.query(User).filter_by(Email = "calista.phippen1@marist.edu").email()

      if (User.Email == "calista.phippen1@marist.edu"):
            assert selected_user.Email == None

# fifth test case
def phone_number_not_correct(db_session, sample_signup_input):
      phone_number_used = select(User).values(sample_signup_input)

      db_session.execute(phone_number_used)

      selected_user = db_session.query(User).filter_by(PhoneNumber = "1234567891").phonenumber()

      if (User.PhoneNumber != "1234567891"):
            assert selected_user.PhoneNumber == None