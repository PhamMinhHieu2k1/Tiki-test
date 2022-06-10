import { Select, Pagination as AntPagination } from "antd";
import PropType from "prop-types";
import { useSearchParams } from "react-router-dom";
import "./Pagination.scss";

const PAGE_OPTIONS = [12, 24, 48, 100];

function Pagination({
    data = {
        page: 1,
        total: 30,
    },
    perPageQuery = "perPage",
    pageQuery = "page",
    numberPage = 12,
    className = "",
    recordSelectable = true,
}) {
    const [query, setQuery] = useSearchParams();
    const perPage = query.get(perPageQuery) || numberPage;

    const pagination = {
        ...data,
        page: parseInt(query.get(pageQuery), 10) || data.page,
    };
    function handleChangePage(movePage) {
        if (movePage === 1) {
            query.delete(pageQuery);
        } else {
            query.set(pageQuery, movePage);
        }

        setQuery(query);
    }

    function selectChangeHandler(value) {
        query.set(perPageQuery, value);
        setQuery(query);
    }

    function itemRender(_, type, originalElement) {
        if (type === "prev") {
            return "Trước";
        }
        if (type === "next") {
            return "Sau";
        }
        return originalElement;
    }
    return (
        <div className={"ct-pagination flex justify-between items-center space-x-4 " + className}>
            {recordSelectable && (
                <div>
                    <span>Hiển thị</span>
                    <Select
                        value={perPage}
                        className="w-32 !mx-1"
                        placeholder=""
                        onChange={selectChangeHandler}
                    >
                        {PAGE_OPTIONS.map((option) => (
                            <Select.Option key={option} value={option}>
                                <span>{option}</span>
                            </Select.Option>
                        ))}
                    </Select>
                    <span>/ {data ? data.total : 30} bản ghi</span>
                </div>
            )}
            <AntPagination
                current={pagination.page}
                total={pagination.total}
                pageSize={perPage}
                itemRender={itemRender}
                onChange={handleChangePage}
                showSizeChanger={false}
            />
        </div>
    );
}

Pagination.propTypes = {
    data: PropType.object,
    perPageQuery: PropType.string,
    pageQuery: PropType.string,
    numberPage: PropType.number,
    className: PropType.string,
    recordSelectable: PropType.bool,
};

export default Pagination;
