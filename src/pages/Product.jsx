import { useDispatch, useSelector } from "react-redux";
import ProfileDrawer from "../components/ProfileDrawer";
import cat from "../assets/no-data.png";
import { Button } from "antd";
import { del } from "../store/ProductSlice";
import { edit } from "../store/ProductSlice";
const Product = () => {
  const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    console.log(products);
    
    function delProduct(id) {
      dispatch(del(id))
    }
    function editProduct(id){
    const edited = products.find((product)=> product.id == id);
    dispatch(edit(edited))
    }
  return (
    <div>
      {products.length == 0 && (
        <div
          style={{
            display: `flex `,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            marginBottom: `204px`,
          }}
        >
          <img style={{ height: 250, width: 250 }} src={cat} alt="" />
          <h3>No Products yet</h3>
        </div>
      )}
      {products.length > 0 && (
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: `repeat(4, 1fr)`,
            gap: `20px`,
            marginBottom: `30px`,
            marginTop: `30px`,
          }}
          className="container"
        >
          {products?.map((product) => (
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                gap: `15px`,
                backgroundColor: `lightBlue`,
                alignItems: `center`,
                padding: `20px 10px`,
                borderRadius: `8px`,
              }}
            >
              <img src={product.imgUrl} style={{ width: `200px` }} />
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  gap: `20px`,
                }}
              >
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `10px`,
                  }}
                >
                  <h3>{product.title}</h3>
                  <h4>{product.des}</h4>
                </div>
                <div
                  style={{ display: `flex`, flexDirection: `row`, gap: `80px` }}
                >
                  <Button type="dashed" onClick={() => delProduct(product.id)}>
                    Delete
                  </Button>
                  <Button type="dashed" onClick={() => editProduct(product.id)}>
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <ProfileDrawer />
    </div>
  );
}

export default Product;
