import React from 'react';
import Axios from 'axios';
import { useQuery } from 'react-query';
import { useContext, useEffect, useState } from 'react';
import { MdOutlineSwipe } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";

const Dashboard = () => {

  return (
    <div>
     <h2 className='font-extrabold text-3xl mb-4'> Dashboard</h2>
     <div>
      <VoucherData />
    </div>
    </div>
    );
  }

  const VoucherData = () => {
    const { data, status } = useQuery(['vouchers'], async () => {
      const res = await Axios.create({ baseURL: "/api", withCredentials: true }).get("/vouchers")
      return res.data;
    })

    return (
      <div className="w-screen">
        <div className='text-3s leading-1 font-extrabold'>
      
      <div className="stats shadow mb-1"> 
        <div className="stat">
          <div className="stat-figure text-primary">
            <RiCoupon2Line size="2rem" />
          </div>
          <div className="stat-title">Total number of vouchers</div>
          <div className="stat-value">4</div>
          <div className="stat-desc">* Active & inactive vouchers</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <MdOutlineSwipe size="2rem"/>
          </div>
          <div className="stat-title">Total number of swipes</div>
          <div className="stat-value">100</div>
          <div className="stat-desc">↗︎ 20 compared to last month </div>
        </div>

        <div className="stat">
            <div className="stat-figure text-primary">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src="https://www.creativefabrica.com/wp-content/uploads/2021/02/12/FoodRestaurant-Gift-Voucher-Template-Graphics-8558430-1.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-title">Voucher about to be expired</div>
            <div className="stat-value">Lunch Set for Two</div>
            <div className="stat-desc text-primary">2 days left</div>
         </div> 
      </div>
    </div>

    </div>
  )
}

export default Dashboard;