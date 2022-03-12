import { CategoryTitle } from "./CategoryTitle";
import { More } from "./More";
import { Product } from "./Product";

export function CategoryProduct(props) {
    return(
        <div>
            <div>
                <CategoryTitle title={ props.title }></CategoryTitle>
                <Product dataProducts={ props.dataProducts }
                    quantity={ props.quantity }>
                </Product>
                <More category={ props.category }></More>
            </div>
        </div>
    )

}
