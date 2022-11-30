import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

import Category from './Category';

const Categories = () => {
  

    const{data:vehicleCategories=[],isLoading}=useQuery({
        queryKey:['vehaicel-categories'],
        queryFn:()=>fetch('http://localhost:5000/vehaicel-categories')
        .then(res=>res.json())
    })


    if(isLoading){
        return <Loading></Loading>
    }

    
    return (
        <div className='my-5'>
            <h1 className='text-center text-5xl text-bold'>There is Our Vehicle Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    vehicleCategories.map(category => <Category key={category.id} category={category} ></Category>)
                }

            </div>
        </div>
    );
};

export default Categories;