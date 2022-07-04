import React, { Component } from "react";
import Pagination from "./Pagination.jsx";
import User from "./User.jsx";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

class UsersList extends Component {
  render() {
    const {
      users,
      currentPage,
      goNext,
      goPrev,
      currentUsersList,
      itemsPerPage,
    } = this.props;

    return (
      <div>
        <Pagination
          currentPage={currentPage + 1}
          goPrev={goPrev}
          goNext={goNext}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />

        <ul className="users">
          <ul className="users">
            {currentUsersList.map((user) => (
              <User name={user.name} age={user.age} key={user.id} />
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users,
    currentPage: state.currentPage,
    currentUsersList: state.currentUsersList,
    itemsPerPage: state.itemsPerPage,
  };
};

const mapDispatch = {
  goNext: usersActions.goNext,
  goPrev: usersActions.goPrev,
};

const connector = connect(mapState, mapDispatch);
const connectorUsers = connector(UsersList);

export default connectorUsers;
