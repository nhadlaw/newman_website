
import ExpandableTestimony from "./ExpandableTestimony";

const Testimonies = ({testimonies}) => {
    return (
        <div>
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {testimonies.map((item, index) => (
                <div key={index}>
                    <ExpandableTestimony image={item.image} desc={item.testimony} bgColor={item.background_color}/>
                </div>
            ))}
            </div>
        </div>
        </div>
      );
}

export default Testimonies