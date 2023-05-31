const user = {
  name: 'Leonardo',
  lastName: 'Nunes',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
