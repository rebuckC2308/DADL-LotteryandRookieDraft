import classes from './Header.module.css'
import Card from '../UI/Card'

const Header = () => {
  return (
    <div>
      <Card className={classes.header}>
        <div>
          <img src="/assets/black-mamba.jpg" alt="mamba" className={classes.logo} />
        </div>
        <h1 className={classes.title}>DADL Draft Lottery</h1>
        <div>
          <img src="/assets/black-mamba.jpg" alt="mamba" className={classes.logo} />
        </div>      </Card>
    </div>
  )
}

export default Header
