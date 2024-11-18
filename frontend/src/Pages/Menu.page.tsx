import { Banner } from "../Components/Banner/Banner";
import { Menu } from "../Components/Menu/Menu";

export const MenuPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-3 ">
      <Banner
        image="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
        title="Explore Our Menu"
        description="Savor the finest dishes made with fresh ingredients, carefully crafted by our chefs."
      />
      <Menu />
    </div>
  );
};
