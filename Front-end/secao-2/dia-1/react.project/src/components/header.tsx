const user = {
  name: 'Leonardo',
  lastName: 'Nunes',
};

function Header() {
  return (
    <div>
      Olá,
      {' '}
      {`${user.name} ${user.lastName}`}
    </div>
  );
}

export default Header;
