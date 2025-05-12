import classes from './Header.module.css'
import Card from '../UI/Card'

const Header = () => {
  return (
    <div>
      <Card className={classes.header}>
        <div>
          <img src="/assets/DADLlogoV2.jpg" alt="dadlLogo" className={classes.logo} />
        </div>
        <h1 className={classes.title}>Drop A Dub League</h1>
        <div>
          <img src="/assets/DADLlogoV2.jpg" alt="dadlLogo" className={classes.logo} />
        </div>      </Card>
    </div>
  )
}

export default Header
