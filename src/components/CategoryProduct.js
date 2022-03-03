import { CategoryTitle } from "./CategoryTitle";
import { Product } from "./Product";

export function CategoryProduct(props) {
    return(
        <div>
            <div>
                <CategoryTitle title={ props.title }></CategoryTitle>
                <Product dataProducts={ props.dataProducts }
                    quantity={ props.quantity }>
                </Product>
            </div>
        </div>
    )

}
