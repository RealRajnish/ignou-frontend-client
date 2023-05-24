import React from "react";
import styled from "styled-components";

const OrderList = ({ data }) => {
  //   console.log(data);
  return (
    <Wrapper className="inner_box">
      {data.map((elem) => {
        return (
          <>
            <div className="product_id">
              <b>Product :</b> {elem.category}
            </div>
            <div className="breed">
              <b>Breed :</b> {elem.breed}
            </div>
            <div className="amount">
              <b>Count :</b> {elem.amount}
            </div>
            <div className="price">
              <b>Price :</b> {elem.price / 100 + 500}
            </div>
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
  flex-wrap: wrap;
`;
export default OrderList;
