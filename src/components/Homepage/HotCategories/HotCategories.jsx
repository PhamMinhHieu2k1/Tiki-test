import { Link } from "react-router-dom";
import BaseCard from "../../shared/Card";

function HotCategories({ hotCategories }) {
    return (
        <BaseCard>
            <h3 className="uppercase text-lg font-semibold">Danh mục nổi bật</h3>
            <div className="grid grid-cols-10 gap-6">
                {hotCategories.map((category) => {
                    return (
                        <Link
                            to={"/danh-muc/" + category.id}
                            className="flex flex-col justify-start items-center text-current px-5"
                            key={category.id}
                            title={category.name}
                        >
                            <img src={category.img} alt="" className="h-14 pb-2 rounded-md" />
                            <p className="m-0 text-center text-sm overflow-hidden text-ellipsis whitespace-pre-wrap max-h-10">
                                {category.name}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </BaseCard>
    );
}

export default HotCategories;
