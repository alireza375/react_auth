
const Categories = ({categories}) => {

    const {logo, category_name, availability} = categories;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img src={logo}
                        alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{availability}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Categories;