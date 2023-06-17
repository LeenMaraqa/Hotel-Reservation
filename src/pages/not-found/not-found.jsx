import "./not-found.css"
import notFound from '../../images/404.jpg';
const NotFound = () => {
  return (
    <div className='p404'>
      <img src={notFound} alt="not found" width={600} height={450} />
    </div>
  )
}

export default NotFound;
