import Company_Logo from './files_to_modify/logo.png';

export default function Logo() {
    return(
        <div>
            <img src={Company_Logo} style={{
            height: 300,
            width: 300,
          }} alt="logo" />
        </div>
    )
 }
 