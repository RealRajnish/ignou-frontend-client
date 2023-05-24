import React from "react";
import styled from "styled-components";
import { useUserContext } from "../contexts/userContext";
import OrderList from "../components/OrderList";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { rootUser, orders, setUserOrder, appointments, setUserAppointments } =
    useUserContext();
  const Navigate = useNavigate();
  if (rootUser) {
    setUserOrder(rootUser.email);
    setUserAppointments(rootUser.email);
  } else {
    Navigate("/loginPage");
  }

  return (
    <Wrapper>
      <div className="main">
        <div className="profile_section">
          <div className="text">Profile</div>
          <div className="profile-box">
            <div className="name">
              <b>Name:</b> {rootUser.name}
            </div>
            <div className="email">
              <b>Email:</b> {rootUser.email}
            </div>
            <div className="phone">
              <b>Contact:</b> {rootUser.phone}
            </div>
            <div className="address">
              <b>Address:</b> {rootUser.address}
            </div>
          </div>
        </div>
        <div className="order_section">
          <div className="text">Order Section</div>
          {orders.map((elem) => {
            const { order_details, status } = elem;
            return (
              <div className="box">
                <div className="cart_item">
                  <OrderList data={order_details.cart} key={elem._id} />
                </div>
                <div className="status">
                  <b>Order Status :</b>{" "}
                  <span className="order_status">{status}</span>
                </div>
                <div className="price_section">
                  <div className="shipping">
                    <b>Shipping :</b> {order_details.shipping_fee / 100}
                  </div>
                  <div className="total">
                    <b>Total :</b> {order_details.total_price / 100}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="appointment_section">
          <div className="text">Appointment Status</div>
          <div className="box">
            {appointments.map((elem) => {
              const { customer_details, animal_details, status, Date } = elem;
              return (
                <div className="box-1" key={elem._id}>
                  <div className="appointment_details">
                    <b>Pet : </b> {animal_details.title}
                  </div>
                  <div className="appointment_details">
                    <b>Breed : </b>
                    {animal_details.breed}
                  </div>
                  <div className="appointment_details">
                    <b>Age : </b>
                    {animal_details.age}
                  </div>
                  <div className="appointment_details">
                    <b>Date : </b>
                    {animal_details.appointment}
                  </div>
                  <div className="appointment_details">
                    <b>Booked on : </b>
                    {Date}
                  </div>
                  <div className="appointment_details">
                    <b>Clinic : </b>
                    {animal_details.clinic}
                  </div>
                  <div className="appointment_details">
                    <b>Status : </b>
                    <span className="status">{status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  font-size: 1.6rem;
  .text {
    display: grid;
    place-content: center;
    font-size: 2.4rem;
    color: #0ef087;
    padding: 1rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 50vh;
    margin: 2rem auto;
    max-width: 60rem;

    .profile_section {
      display: flex;
      padding: 5rem;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 2rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      .profile-box {
        display: flex;
        flex-direction: column;
      }
    }
    .order_section {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      .box {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin: 0.5rem;

        .status {
          padding: 0.5rem;
          .order_status {
            color: #0ef087;
            font-weight: bold;
          }
        }
        .price_section {
          padding: 0.5rem;
          display: flex;
          gap: 2rem;
        }
      }
    }

    .appointment_section {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      display: flex;
      flex-direction: column;

      .box {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        .box-1 {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          padding: 1rem;
        }
      }

      .status {
        color: #0ef087;
        font-weight: bold;
      }
    }
  }
`;
export default Profile;
