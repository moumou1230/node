import "./App.css";
function ProductTable({ products }) {
  let row = [];
  let catnull = null;

  products.forEach((product) => {
    if (product.category != catnull) {
      row.push;
    }
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>

          <th>Price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
}
function SearchBar() {
  return (
    <>
      <input placeholder="Search..."></input>
      <label>
        <input type="checkbox"></input>
        Only show products in shock
      </label>
    </>
  );
}
function FilterProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterProductTable products={PRODUCTS}></FilterProductTable>;
}
