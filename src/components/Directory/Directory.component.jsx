import "./Directory.styles.scss";
import CategoryItem from "../CategoryItem/CategoryItem.component";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} />;
      })}
    </div>
  );
};

export default Directory;
