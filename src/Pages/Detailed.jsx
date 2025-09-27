import { useLocation } from 'react-router'
import DetailedCard from '../Component/DetailedPage/DetailedCard';
const Detailed= () => {
 const data =  useLocation();

  return (
   <>
    <DetailedCard data={data} />
    </>
  )
}

export default Detailed