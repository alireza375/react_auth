import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";

const CategoryList = () => {
    const [categories, setCategory] = useState([]);
    

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div className="text-center">
            <h3 className='text-5xl font-bold'>Job Category List</h3>
            <p className="mt-4">Explore thousands of job opportunities with all the information you need. Its your future.</p>

            <div className="grid grid-cols-4 gap-6">
                {
                    categories.map(categories => <Categories key={categories.id} categories={categories}></Categories>)
                }
            </div>
            
        </div>
    );
};

export default CategoryList;