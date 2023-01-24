import Company_Logo from './files_to_modify/logo.jpg';

const Logo = () => {
  return(
    <div>
        <img src={Company_Logo} style={{
        height: 100,
        width: 100,
      }} alt="logo" />
    </div>
)
}

export default Logo;
