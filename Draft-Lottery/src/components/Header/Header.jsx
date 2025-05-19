import classes from './Header.module.css'
import Card from '../UI/Card'

const Header = () => {
  return (
    <div>
      <Card className={classes.header}>
        <div>
          <img src="/assets/leagueLogo.jpg" alt="leagueLogo" className={classes.logo} />
        </div>
        <h1 className={classes.title}>12 Angry Men Basketball</h1>
        <div>
          <img src="/assets/leagueLogo.jpg" alt="leagueLogo" className={classes.logo} />
        </div>      </Card>
    </div>
  )
}

export default Header
